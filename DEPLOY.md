# Deploying Calibi AI to MilesWeb

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that **builds the site and deploys it to your MilesWeb server over SSH every
time you push to `main`** — no manual uploads, no FTP, no Build step in the
MilesWeb panel.

```
Push to main  →  GitHub builds the app  →  uploads .output/ to your server
              →  installs production deps  →  (re)starts the app via PM2
```

Your server (from the MilesWeb panel): `ssh -p 22 calibai1@103.219.109.67`

---

## 1. One-time server setup (≈ 2 minutes)

Open **MilesWeb → cPanel → Terminal** (or connect from your own computer with
`ssh -p 22 calibai1@103.219.109.67`) and run the included setup script once:

```bash
# from a machine that has the repo cloned:
scp -P 22 -r scripts/setup-milesweb.sh calibai1@103.219.109.67:~/
# then on the server:
bash ~/setup-milesweb.sh
```

It checks Node.js (needs **v20+** — MilesWeb: *cPanel → Node.js → select
version*), creates the app directory `~/calibiai`, and installs **PM2**
user-locally to keep the app running and auto-restart it on crash.

> If `node -v` reports nothing or < 20, pick Node 20/22 in
> **MilesWeb → cPanel → Node.js** first, then re-run the script.

## 2. Add GitHub secrets (≈ 2 minutes)

In the GitHub repo: **Settings → Secrets and variables → Actions → New
repository secret**, add:

| Secret            | Value (yours)             | Notes                                        |
| ----------------- | ------------------------- | -------------------------------------------- |
| `SSH_HOST`        | `103.219.109.67`          | Server address from the MilesWeb panel       |
| `SSH_USER`        | `calibai1`                | SSH username from the MilesWeb panel         |
| `SSH_PORT`        | `22`                      | (optional — defaults to 22)                  |
| `SSH_PASSWORD`    | your MilesWeb SSH password| From the panel's "SSH Password Authentication" |

> **`REMOTE_DIR` must be the directory your live app actually runs from.**
> It defaults to `~/calibiai`, which matches `scripts/setup-milesweb.sh`. If you
> started the app from somewhere else, set the `REMOTE_DIR` variable — otherwise
> the workflow will happily upload to one directory while the server keeps
> running the old copy (see "Deploy succeeds but the site is unchanged").

**Recommended instead of a password:** generate an SSH key pair
(`ssh-keygen -t ed25519 -C "github-deploy"`), add the **public** key in
**MilesWeb → cPanel → Security → SSH Keys** (or the equivalent *Manage SSH
Keys*), and store the **private** key in the `SSH_PRIVATE_KEY` secret instead
of `SSH_PASSWORD`. The workflow uses the key automatically when present.

Optional — **Variables** tab (Settings → Secrets and variables → Actions →
Variables), only if you need to change defaults:

| Variable        | Default              | Purpose                                              |
| --------------- | -------------------- | ---------------------------------------------------- |
| `REMOTE_DIR`    | `~/calibiai`         | Where the app lives on the server — **must** match the directory the live process runs from |
| `APP_PORT`      | `3000`               | Port the app listens on (see section 4)              |
| `RESTART_CMD`   | *(empty)*            | Custom restart command run in `REMOTE_DIR` instead of the PM2 logic (use this for cPanel's Node.js App manager) |
| `PUBLIC_URL`    | `https://calibiai.com` | Origin used for the post-deploy public check       |

## 3. Deploy

```bash
git push origin main
```

Watch it at **GitHub → Actions → "Deploy to MilesWeb"**. A green check means
the site is live. To deploy a branch for testing (e.g. this one before
merging): **Actions → Deploy to MilesWeb → Run workflow → pick the branch**.

Every push to `main` re-deploys automatically. The build is swapped in
atomically, so a failed deploy never takes the live site down.

## 4. Pointing calibiai.com at the app

The app listens on port **3000** by default (`ecosystem.config.cjs`).
Your domain needs to reach it:

- **cPanel → "Setup Node.js App" (recommended):** create/select an app with
  - Application root: `/home/calibai1/calibiai`
  - Application startup file: `.output/server/index.mjs`
  - Application URL: `calibiai.com` (port `3000`)
  - Node version: 20/22
  With cPanel managing the process, set the variable
  `RESTART_CMD` to your app's restart command (cPanel restart) and skip PM2 —
  the workflow will still handle all file syncing.
- **No Node.js app manager:** if your domain is proxied straight to the
  server port, keep the PM2 flow as-is. Make sure the port is reachable
  (MilesWeb security/firewall) and set `APP_PORT` to match if you change it.

## 5. Useful commands on the server

```bash
pm2 logs calibiai            # live logs
pm2 restart calibiai         # restart
pm2 stop calibiai            # stop
pm2 monit                    # resource monitor
node -v                      # runtime version
```

## How the deploy verifies itself

A green build is not proof that the new code is live. After restarting, the
workflow checks the app on `APP_PORT` and **fails the job** unless:

1. the served homepage references the exact hashed stylesheet that was just
   uploaded (same hash ⇒ same build),
2. that stylesheet file returns HTTP `200`,
3. `/sitemap.xml` lists `/privacy-policy`, `/terms` and `/products`.

It then does a softer check against `PUBLIC_URL`: if the local app serves the
new build but the public domain does not, you get a warning telling you the
domain is handled by something else (cPanel app manager, a reverse proxy, or a
CDN cache).

## Troubleshooting

| Symptom                                   | Fix |
| ----------------------------------------- | --- |
| Workflow fails: "Missing GitHub secrets"  | Add the secrets from section 2.       |
| `Permission denied (publickey)`           | If using a key: add the public key to cPanel SSH Keys; make sure the `SSH_PRIVATE_KEY` secret contains the **private** key (whole file). |
| `node not found` in deploy log            | Install/enable Node.js ≥ 20 in MilesWeb cPanel. |
| **Deploy succeeds but the site is unchanged** (missing pages, old CSS) | The app being served is not the build that was uploaded. Set `REMOTE_DIR` to the directory the live process runs from, or set `RESTART_CMD` if cPanel's Node.js App manager runs the site. The workflow now fails loudly on this instead of reporting success — read the `::error::` line in the "Run remote deployment" step. |
| `... is serving a DIFFERENT build`        | Same as above: the process was first registered from another directory. `pm2 delete calibiai && cd $REMOTE_DIR && pm2 start ecosystem.config.cjs`, or fix `REMOTE_DIR`. |
| `... is NOT serving the new build` (warning) | The app on `APP_PORT` is correct but the domain is not reaching it — check cPanel → Setup Node.js App, your reverse proxy, or a CDN/browser cache. |
| `nothing is listening on APP_PORT`        | PM2 did not start the app (or it crashed). Run `pm2 logs calibiai` on the server; if cPanel manages the app, set `APP_PORT` to its port and `RESTART_CMD` to its restart command. |
| Health check warning, but PM2 shows online | Your app runs on a different port (common with cPanel's Node.js manager) — set `APP_PORT`. |
| Site loads old version after deploy       | Check the browser cache; the deploy log's verification lines confirm which build is live. |

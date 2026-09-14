#!/usr/bin/env bash
# =============================================================================
#  One-time setup for deploying Calibi AI to a MilesWeb server.
#
#  Run this ONCE on the server — either over SSH (see DEPLOY.md) or from
#  MilesWeb → cPanel → Terminal — after checking out the repo locally:
#
#    bash scripts/setup-milesweb.sh [app-dir]
#
#  Defaults: app dir = ~/calibiai, PM2 installed user-locally.
# =============================================================================
set -euo pipefail

APP_DIR="${1:-$HOME/calibiai}"

echo "==> Checking prerequisites"
if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: node not found. Enable Node.js for this account in MilesWeb (cPanel → Node.js) and re-run."
  exit 1
fi
command -v npm >/dev/null 2>&1 || { echo "ERROR: npm not found."; exit 1; }
echo "    node $(node -v), npm $(npm -v)"

MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$MAJOR" -lt 20 ]; then
  echo "    WARNING: Node 20+ recommended for this app (currently $MAJOR)."
fi

echo "==> Preparing app directory: $APP_DIR"
mkdir -p "$APP_DIR"

if ! command -v pm2 >/dev/null 2>&1; then
  echo "==> Installing PM2 (user-local)"
  export PATH="$HOME/.local/bin:$PATH"
  npm install --prefix "$HOME/.local" -g pm2 \
    || npm install -g pm2 \
    || { echo "ERROR: could not install PM2 automatically. Install it manually, then re-run this script."; exit 1; }
fi
export PATH="$HOME/.local/bin:$PATH"
echo "    pm2 $(pm2 -v 2>/dev/null || echo 'installed')"

# Keep PM2 running across reboots (best effort — needs systemd permissions that
# some shared hosts don't grant; safe to ignore failure).
pm2 startup systemd -u "$(id -un)" --hp "$HOME" >/dev/null 2>&1 \
  || echo "    (pm2 startup skipped — after a server reboot, run: pm2 start $APP_DIR/ecosystem.config.cjs)"
pm2 install pm2-logrotate >/dev/null 2>&1 || true

echo
echo "Setup complete."
echo "  App directory : $APP_DIR"
echo "  Next          : push to 'main' on GitHub — the deploy workflow will"
echo "                  upload the build here and manage it with PM2."
echo "  To test now   : cd $APP_DIR && pm2 start ecosystem.config.cjs"

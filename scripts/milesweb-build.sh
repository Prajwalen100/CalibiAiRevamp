#!/usr/bin/env bash
# =============================================================================
#  Build script for the MilesWeb panel's native GitHub deploy.
#
#  Set the panel's Build script field to exactly:
#      bash scripts/milesweb-build.sh
#
#  Do not paste this file's contents into the panel: the textarea rewrites
#  line endings to CRLF, and the shell then reads `set -eu\r` and dies with
#  "set: -: invalid option".
#
#  It runs ON THE SERVER, from the deploy directory, after MilesWeb clones the
#  repository. Kept in version control so the panel field and the repo agree.
# =============================================================================
set -eu

# The deploy shell is non-interactive and does not load ~/.bashrc, so NVM has
# to be sourced explicitly before node/npm exist on PATH.
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
  nvm use 22 >/dev/null 2>&1 || nvm use stable >/dev/null 2>&1 || true
fi
export PATH="$HOME/.local/bin:$PATH"

node -v
npm -v

# Vite needs headroom: the bundle pulls in mermaid, cytoscape and katex.
export NODE_OPTIONS="--max-old-space-size=2048"
export NODE_ENV=production

# Dev dependencies are required to build, so install everything first.
npm ci --no-audit --no-fund
npm run build

# Fail loudly if the Nitro entrypoint is missing rather than restarting a
# half-built app.
test -f .output/server/index.mjs

# Drop dev dependencies now that the bundle exists.
npm prune --omit=dev --no-audit --no-fund

echo "Build complete: $(pwd)/.output/server/index.mjs"

# No process restart here on purpose. MilesWeb builds in a per-deploy
# directory (/var/www/<site>/deploys/<sha>/) and only activates it after the
# build exits 0, so restarting the app from here would point it at a
# directory that is not live yet. The panel's Node.js app owns the restart.

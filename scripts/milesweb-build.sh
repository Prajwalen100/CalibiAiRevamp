#!/usr/bin/env bash
# =============================================================================
#  Build script for the MilesWeb panel's native GitHub deploy.
#
#  Paste the body of this file into:
#      MilesWeb panel -> GitHub -> Configure GitHub deploy -> Build script
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

# Restart under PM2 when it is installed; a no-op when MilesWeb's own app
# manager owns the process instead.
if command -v pm2 >/dev/null 2>&1; then
  pm2 restart calibiai --update-env || pm2 start ecosystem.config.cjs
  pm2 save
fi

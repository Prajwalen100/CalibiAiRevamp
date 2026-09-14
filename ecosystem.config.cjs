/**
 * PM2 configuration for Calibi AI — used by the MilesWeb deploy workflow
 * (.github/workflows/deploy.yml) to keep the production app running.
 *
 *   pm2 start ecosystem.config.cjs     # first start
 *   pm2 restart calibiai               # restart after a deploy
 *   pm2 logs calibiai                  # view logs
 */
module.exports = {
  apps: [
    {
      name: "calibiai",
      // Nitro (node-server preset) entry produced by `npm run build`.
      script: ".output/server/index.mjs",
      instances: 1,
      exec_mode: "fork",
      // Restart if the process grows past this (shared hosting has limited RAM).
      max_memory_restart: "500M",
      kill_timeout: 5000,
      env: {
        NODE_ENV: "production",
        // Port the app listens on. Nitro defaults to 3000; set it here (or in a
        // .env file next to this config) to match your MilesWeb setup.
        // PORT: 3000,
      },
      time: true, // prefix log lines with timestamps
    },
  ],
};

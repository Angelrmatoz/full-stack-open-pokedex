// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',
  timeout: 30 * 1000,
  use: {
    baseURL: 'http://localhost:5000',
    headless: true,
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5000',
    timeout: 120 * 1000,
    reuseExistingServer: false,
  },
});

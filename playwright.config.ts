import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./e2e',use:{baseURL:'http://127.0.0.1:4171/Feedback-Nexus/',browserName:'chromium'},webServer:{command:'npm run dev -- --port 4171',url:'http://127.0.0.1:4171/Feedback-Nexus/',reuseExistingServer:!process.env.CI},reporter:'list'});

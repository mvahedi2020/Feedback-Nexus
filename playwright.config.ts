import {defineConfig} from '@playwright/test';
const capture=process.env.CAPTURE_MEDIA==='1';
export default defineConfig({testDir:'./e2e',use:{baseURL:'http://127.0.0.1:4171/Feedback-Nexus/',browserName:'chromium',screenshot:capture?'on':'only-on-failure',video:capture?'on':'retain-on-failure'},webServer:{command: 'npm run build && npx vite preview --host 127.0.0.1 --port 4171 --strictPort',url:'http://127.0.0.1:4171/Feedback-Nexus/',reuseExistingServer: false},reporter:'list'});

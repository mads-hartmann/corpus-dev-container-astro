// @ts-check
import { defineConfig } from 'astro/config';

// Allow the dev server to accept requests forwarded through Ona's exposed-port
// host. ALLOWED_HOSTS is set by the dev-server automation; it has no effect when unset.
const allowedHosts = process.env.ALLOWED_HOSTS?.split(',').filter(Boolean) ?? [];

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts,
    },
  },
});

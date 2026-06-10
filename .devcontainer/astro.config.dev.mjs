// @ts-check
// Dev-only Astro config used by the Ona "Dev Server" automation.
// It extends the project's base config and adjusts the dev server so it is
// reachable through Ona's port forwarding:
//   - host: true  -> bind to 0.0.0.0 (loopback-only is unreachable via forwarding)
//   - allowedHosts -> accept the runner's exposed-port host pattern
//     (<port>--<environment-id>.<runner-domain>) which Vite otherwise rejects.
import { defineConfig } from 'astro/config';
import baseConfig from '../astro.config.mjs';

export default defineConfig({
  ...baseConfig,
  server: { host: true },
  vite: {
    ...(baseConfig.vite ?? {}),
    server: {
      ...(baseConfig.vite?.server ?? {}),
      allowedHosts: true,
    },
  },
});

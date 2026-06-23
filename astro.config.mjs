// @ts-check
import { defineConfig } from 'astro/config';

// Allow the dev server to accept requests proxied through Ona's exposed-port
// host. ASTRO_ALLOWED_HOSTS is set by the dev-server automation at startup.
const allowedHosts = process.env.ASTRO_ALLOWED_HOSTS
	? process.env.ASTRO_ALLOWED_HOSTS.split(',')
	: [];

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			allowedHosts,
		},
	},
});

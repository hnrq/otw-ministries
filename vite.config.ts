import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: { fs: { strict: false }},
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		environment: 'happy-dom',
		setupFiles: ['tests/setup.ts'],
		globals: true,
		deps: {
			experimentalOptimizer: { 
				web: { include: [`@sveltejs/kit`], enabled: true },
			}
	  },
	}
});

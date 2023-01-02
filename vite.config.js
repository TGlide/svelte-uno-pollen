import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from '@unocss/vite';
import unoConfig from './uno.config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Unocss({
			...unoConfig,
		}),
		sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
};

export default config;

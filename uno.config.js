import { extractorSvelte } from '@unocss/core';
import pollenObj from './src/styles/pollen.json';

/** @type {import('@unocss/vite').VitePluginConfig} */
export default {
	extractors: [extractorSvelte],
	rules: [
		// Font Family
		[/^font-(\w+)$/, ([, family]) => ({ 'font-family': `var(--font-${family})` })]
	]
};

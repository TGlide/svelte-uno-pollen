/** @type {import('pollen-css').Config} */
export default (pollen) => ({
	output: { css: './src/styles/pollen.css', json: './src/styles/pollen.json' },
	modules: {
		font: {
			...pollen.font,
			mono: "'Fira Mono', monospace"
		}
	}
});

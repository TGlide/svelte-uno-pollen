import { extractorSvelte } from '@unocss/core';

import pollenObj from './src/styles/pollen.json';

const typography = [
	// Font Size
	...Object.keys(pollenObj.scale).map((key) => {
		return [`fs-${key}`, { 'font-size': `var(--scale-${key})` }];
	}),
	...Object.keys(pollenObj.scaleFluid).map((key) => {
		return [`fs-fluid-${key}`, { 'font-size': `var(--scale-fluid-${key})` }];
	}),
	// Font Family
	...Object.keys(pollenObj.font).map((key) => {
		return [`font-${key}`, { 'font-family': `var(--font-${key})` }];
	}),
	// Font Weight
	...Object.keys(pollenObj.weight).map((key) => {
		return [`weight-${key}`, { 'font-weight': `var(--weight-${key})` }];
	}),
	// Line Height
	...Object.keys(pollenObj.line).map((key) => {
		return [`line-${key}`, { 'line-height': `var(--line-${key})` }];
	}),
	// Letter Spacing
	...Object.keys(pollenObj.letter).map((key) => {
		return [`letter-${key}`, { 'letter-spacing': `var(--letter-${key})` }];
	}),
	// Prose Width
	...Object.keys(pollenObj.prose).map((key) => {
		return [`prose-${key}`, { 'max-width': `var(--prose-${key})` }];
	}),
];

const layout = [
	// Size
	...Object.keys(pollenObj.size).reduce((acc, key) => {
		return [
			...acc,
			[`w-${key}`, { width: `var(--size-${key})` }],
			[`h-${key}`, { height: `var(--size-${key})` }],
			[`mr-${key}`, { 'margin-right': `var(--size-${key})` }],
			[`ml-${key}`, { 'margin-left': `var(--size-${key})` }],
			[`mt-${key}`, { 'margin-top': `var(--size-${key})` }],
			[`mb-${key}`, { 'margin-bottom': `var(--size-${key})` }],
			[`mx-${key}`, { 'margin-left': `var(--size-${key})`, 'margin-right': `var(--size-${key})` }],
			[`my-${key}`, { 'margin-top': `var(--size-${key})`, 'margin-bottom': `var(--size-${key})` }],
			[`pr-${key}`, { 'padding-right': `var(--size-${key})` }],
			[`pl-${key}`, { 'padding-left': `var(--size-${key})` }],
			[`pt-${key}`, { 'padding-top': `var(--size-${key})` }],
			[`pb-${key}`, { 'padding-bottom': `var(--size-${key})` }],
			[
				`px-${key}`,
				{ 'padding-left': `var(--size-${key})`, 'padding-right': `var(--size-${key})` },
			],
			[
				`py-${key}`,
				{ 'padding-top': `var(--size-${key})`, 'padding-bottom': `var(--size-${key})` },
			],
			[`gap-${key}`, { gap: `var(--size-${key})` }],
		];
	}),
	// Container Widths
	...Object.keys(pollenObj.width).map((key) => {
		return [`contained-${key}`, { 'max-width': `var(--width-${key})` }];
	}),
	// Aspect Ratio
	...Object.keys(pollenObj.ratio).map((key) => {
		return [`ratio-${key}`, { 'aspect-ratio': `var(--ratio-${key})` }];
	}),
];

const ui = [
	// Border Radius
	...Object.keys(pollenObj.radius).map((key) => {
		return [`radius-${key}`, { 'border-radius': `var(--radius-${key})` }];
	}),
	// Shadow
	...Object.keys(pollenObj.shadow).map((key) => {
		return [`shadow-${key}`, { 'box-shadow': `var(--shadow-${key})` }];
	}),
	// Blur
	...Object.keys(pollenObj.blur).map((key) => {
		return [`blur-${key}`, { 'backdrop-filter': `blur(var(--blur-${key}))` }];
	}),
	// Easing
	...Object.keys(pollenObj.ease).map((key) => {
		return [`ease-${key}`, { 'transition-timing-function': `var(--ease-${key})` }];
	}),
	// Layers
	...Object.keys(pollenObj.layer).map((key) => {
		return [`layer-${key}`, { 'z-index': `var(--layer-${key})` }];
	}),
];

const grid = [
	// Grid Template
	...Object.keys(pollenObj.grid).reduce((acc, key) => {
		if (Number.isNaN(Number(key))) return acc;
		return [
			...acc,
			[`grid-cols-${key}`, { 'grid-template-columns': `repeat(${key}, minmax(0, 1fr))` }],
			[`grid-rows-${key}`, { 'grid-template-rows': `repeat(${key}, minmax(0, 1fr))` }],
		];
	}),
	// Grid Page
	['grid-page', { 'grid-template-columns': 'var(--grid-page)' }],
	['grid-page-main', { 'grid-column': 'var(--grid-page-main)' }],
];

const colors = [
	...Object.keys(pollenObj.color).reduce((acc, key) => {
		return [
			...acc,
			[`bg-${key}`, { 'background-color': `var(--color-${key})` }],
			[`color-${key}`, { color: `var(--color-${key})` }],
		];
	}),
];

const flex = [
	// display
	['flex', { display: 'flex' }],
	['inline-flex', { display: 'inline-flex' }],
	['flex-inline', { display: 'inline-flex' }],

	// flex
	[/^flex-(\d+)$/, ([, d]) => ({ flex: d })],
	['flex-1', { flex: '1 1 0%' }],
	['flex-auto', { flex: '1 1 auto' }],
	['flex-initial', { flex: '0 1 auto' }],
	['flex-none', { flex: 'none' }],

	// shrink/grow/basis
	[/^(?:flex-)?shrink(?:-(.*))?$/, ([, d = '']) => ({ 'flex-shrink': d })],
	[/^(?:flex-)?grow(?:-(.*))?$/, ([, d = '']) => ({ 'flex-grow': d })],
	[/^(?:flex-)?basis-(.+)$/, ([, d]) => ({ 'flex-basis': d })],

	// directions
	['flex-row', { 'flex-direction': 'row' }],
	['flex-row-reverse', { 'flex-direction': 'row-reverse' }],
	['flex-col', { 'flex-direction': 'column' }],
	['flex-col-reverse', { 'flex-direction': 'column-reverse' }],

	// wraps
	['flex-wrap', { 'flex-wrap': 'wrap' }],
	['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],
	['flex-nowrap', { 'flex-wrap': 'nowrap' }],
];

/** @type {import('@unocss/vite').VitePluginConfig} */
export default {
	extractors: [extractorSvelte],
	presets: [],
	rules: [...typography, ...layout, ...ui, ...grid, ...colors, ...flex],
};

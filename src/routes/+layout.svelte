<script>
	import Header from './Header.svelte';
	import '$styles/pollen.css';
	import 'uno.css';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			visit <a class="weight-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: var(--size-4);
		width: 100%;
		max-width: var(--width-lg);
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--size-3);
	}

	@media (min-width: 480px) {
		footer {
			padding: var(--size-3) 0;
		}
	}
</style>

<script>
	import { fade } from 'svelte/transition';

	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/layouts/Header.svelte';
	import { Modals, closeModal } from 'svelte-modals';

	import '$lib/theme/index.scss';
</script>

<Modals>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		transition:fade
		slot="backdrop"
		class="backdrop"
		on:click={closeModal}
		role="button"
		tabindex="0"
	/>
</Modals>

<Header />
<Container size="md">
	<slot />
</Container>

<style>
	.backdrop {
		z-index: 1;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>

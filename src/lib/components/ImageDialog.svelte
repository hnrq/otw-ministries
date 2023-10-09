<script lang="ts">
	import { fly } from 'svelte/transition';

	export let isOpen = false;
	export let src = '';
	$: console.log(isOpen);
</script>

{#if isOpen}
	<!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
	<div role="dialog" class="modal" transition:fly|global={{ y: 50 }} on:introstart on:outroend>
		<img {src} alt="" />
	</div>
{/if}

<style>
	.modal {
		z-index: 2;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;

		& > img {
			height: 600px;
		}
	}
</style>

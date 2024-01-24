<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Document } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let isOpen = false;
	export let src = '';
	export let description: Document | undefined = undefined;
</script>

{#if isOpen}
	<!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
	<div role="dialog" class="modal" transition:fly|global={{ y: 50 }} on:introstart on:outroend>
		<img {src} alt="" />
		{#if description}<p class="modal__description">
				{@html documentToHtmlString(description)}
			</p>{/if}
	</div>
{/if}

<style lang="scss">
	@use '$lib/theme/utils';

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
			max-height: 500px;
		}

		&__description {
			pointer-events: all;
			background: white;
			max-width: 400px;
			padding: utils.spacing(2);
		}
	}
</style>

<script lang="ts">
	export let image: string | undefined = undefined;
</script>

<div class="card">
	{#if image !== undefined}
		<img src={image} alt="" class="card__image" />
	{/if}
	{#if $$slots.content}
		<div class="card__content">
			<slot name="content" class="card__content" />
		</div>
	{/if}
	{#if $$slots.actions}
		<div class="card__actions">
			<slot name="actions" />
		</div>
	{/if}
</div>

<style lang="scss">
	@use '$lib/theme/utils';

	.card {
		box-shadow: 0px 0px 10px 0px var(--text-low);
		display: flex;
		flex-direction: column;

		&__image {
			max-height: 200px;
			object-fit: cover;
		}

		&__actions,
		&__content {
			padding: utils.spacing(1);
		}

		&__actions {
			display: flex;
			justify-content: right;
		}
	}
</style>

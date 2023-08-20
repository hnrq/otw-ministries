<script lang="ts">
	export let image: string | undefined = undefined;
</script>

<div class="card">
	{#if image !== undefined}
		<img src={image} alt="" />
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
	@use '$theme/utils';

	.card {
		border: 1px solid var(--text-low);
		display: flex;
		flex-direction: column;

		&__actions,
		&__content {
			padding: utils.spacing(2);
		}
	}
</style>

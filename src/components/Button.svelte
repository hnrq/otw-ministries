<script lang="ts">
	interface $$Props extends Partial<HTMLButtonElement> {
		fullWidth: boolean;
	}

	export let fullWidth = false;
</script>

<button class:button--full-width={fullWidth} class="button" {...$$props} />

<style lang="scss">
	.button {
		border: none;
		outline: none;
		background-color: var(--primary-color);
		color: white;

		&--full-width {
			width: 100%;
		}
	}
</style>

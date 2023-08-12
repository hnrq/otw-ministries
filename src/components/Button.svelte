<script lang="ts">
	interface $$Props extends Partial<HTMLButtonElement> {
		fullWidth?: boolean;
	}

	export let fullWidth = false;
</script>

<button class:button--full-width={fullWidth} class="button" {...$$props}><slot /></button>

<style lang="scss">
	@use '$theme/utils';

	.button {
		border: none;
		outline: none;
		background-color: var(--text-high);
		color: white;
		padding: utils.spacing(1) utils.spacing(2);

		&:hover {
			cursor: pointer;
		}

		&--full-width {
			width: 100%;
		}
	}
</style>

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
		background: transparent;
		color: var(--text-high);
		transition-property: color, background;
		transition-duration: 0.2s;
		transition-timing-function: ease-in;
		border: 1px solid var(--text-high);
		text-transform: uppercase;
		padding: utils.spacing(1.5) utils.spacing(4);

		&:hover {
			cursor: pointer;
			background: var(--text-high);
			color: white;
		}

		&--full-width {
			width: 100%;
		}
	}
</style>

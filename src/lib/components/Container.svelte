<script lang="ts">
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
</script>

<div class={`container container--${size}`}>
	<slot />
</div>

<style lang="scss">
	@use '$lib/theme/utils';

	.container {
		position: relative;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 0;
		box-sizing: border-box;
		@include utils.breakpoint-down('md') {
			margin-left: utils.spacing(2);
			margin-right: utils.spacing(2);
		}

		@each $breakpoint, $value in utils.$breakpoints {
			&--#{$breakpoint} {
				max-width: $value;
			}
		}
	}
</style>

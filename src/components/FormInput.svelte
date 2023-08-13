<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { Field } from 'svelte-forms/types';

	export let field: Writable<Field<string>>;
	export let errorMessages: Record<string, string> = {};
	export let textArea = false;
</script>

<div class="input">
	{#if textArea}
		<textarea class="input__field" {...$$props} bind:value={$field.value} />
	{:else}
		<input class="input__field" {...$$props} bind:value={$field.value} />
	{/if}

	<div class="input__error">
		{#if $field.errors.length > 0}
			<small>{errorMessages[$field.errors[0]]}</small>
		{/if}
	</div>
</div>

<style lang="scss">
	@use '$theme/utils';

	.input {
		display: flex;
		flex-direction: column;
		height: 100%;
		&__field {
			padding: utils.spacing(1.5);
			border: none;
			background-color: hsla(0, 0%, 0%, 0.03);
			color: var(--text-high);
		}

		&__error {
			margin-left: utils.spacing(1);
			font-size: 0.75rem;
		}

		textarea.input__field {
			resize: none;
			height: 100%;
		}
	}
</style>

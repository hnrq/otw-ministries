<script lang="ts" context="module">
	interface Field extends Partial<HTMLInputElement> {
		name: string;
		validators: Validator[];
		errorMessages: Record<string, string>;
		textArea?: boolean;
	}
</script>

<script lang="ts">
	import { field, form, type Validator } from 'svelte-forms';
	import { required, email } from 'svelte-forms/validators';

	import { enhance } from '$app/forms';
	import FormInput from '$components/FormInput.svelte';
	import Button from '$components/Button.svelte';

	const fields: Field[] = [
		{
			name: 'name',
			placeholder: 'Name',
			validators: [required()],
			errorMessages: { required: 'Name required' }
		},
		{
			name: 'email',
			placeholder: 'E-mail',
			validators: [email()],
			errorMessages: { not_an_email: 'Invalid e-mail' }
		},
		{
			name: 'phone',
			placeholder: 'Phone',
			validators: [],
			errorMessages: {}
		},
		{
			name: 'subject',
			placeholder: 'Subject',
			validators: [required()],
			errorMessages: { required: 'Subject required' }
		},
		{
			name: 'content',
			placeholder: 'How can we be of assistance?',
			validators: [required()],
			errorMessages: { required: 'Content required' },
			textArea: true
		}
	];

	const formFields = fields.map(({ name, validators }) => field(name, '', validators));
	const contactForm = form(...formFields);
</script>

<section class="contact">
	<h2 class="contact__title">Contact us</h2>
	<small class="contact__subtitle">
		If you are in need of assistance, please feel free to contact us so that we can help you help
		yourself on this new journey to freedom and recovery.
	</small>

	<form
		class="contact__form"
		method="POST"
		use:enhance={async ({ cancel }) => {
			contactForm.validate();
			if (!$contactForm.valid) cancel();
		}}
	>
		{#each fields as { name, placeholder, errorMessages, textArea }, index}
			<div class={`contact__${name}`}>
				<FormInput {name} {placeholder} field={formFields[index]} {errorMessages} {textArea} />
			</div>
		{/each}
		<div class="contact__submit">
			<Button disabled={!$contactForm.valid} type="submit" fullWidth>Send</Button>
		</div>
	</form>
</section>

<style lang="scss">
	@use '$theme/utils';

	.contact {
		margin-bottom: utils.spacing(3);

		&__title {
			margin: 0;
		}

		&__subtitle {
			color: var(--text-medium);
		}

		&__form {
			display: grid;
			margin-top: utils.spacing(4);
			grid-template:
				'a b c' auto
				'd d d' auto
				'e e e' 400px
				'f f f' auto;

			@include utils.breakpoint-down('sm') {
				grid-template:
					'a a' auto
					'b b' auto
					'c c' auto
					'd d' auto
					'e e' 200px
					'f f' auto;
			}
			gap: utils.spacing(2);
		}

		&__name {
			grid-area: a;
		}

		&__email {
			grid-area: b;
		}

		&__phone {
			grid-area: c;
		}

		&__subject {
			grid-area: d;
		}

		&__content {
			grid-area: e;
		}

		&__submit {
			grid-area: f;
			justify-self: end;
		}
	}
</style>

import { field } from 'svelte-forms';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/svelte';

import FormInput from '$lib/components/FormInput.svelte';

describe('<FormInput />', () => {
	it('renders a HTML input element', () => {
		const placeholder = faker.word.noun();
		const { getByPlaceholderText } = render(FormInput, { placeholder, field: field('name', '') });

		expect(getByPlaceholderText(placeholder)).toBeInstanceOf(HTMLInputElement);
	});

	it('renders a textarea if textArea === true', () => {
		const placeholder = faker.word.noun();
		const { getByPlaceholderText } = render(FormInput, {
			placeholder,
			field: field('name', ''),
			textArea: true
		});

		expect(getByPlaceholderText(placeholder)).toBeInstanceOf(HTMLTextAreaElement);
	});
});

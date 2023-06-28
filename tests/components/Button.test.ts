import html from 'svelte-htm';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/svelte';

import Button from '$components/Button.svelte';

describe('<Button />', () => {
	it('adds .button--full-width CSS class if fullWidth === true', () => {
		const content = faker.word.noun();
		const { getByText } = render(html`<${Button} fullWidth>${content}</${Button}>`);

		expect(getByText(content)).toHaveClass(`button--full-width`);
	});
});

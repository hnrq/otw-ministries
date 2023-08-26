import Container from '$lib/components/Container.svelte';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/svelte';
import html from 'svelte-htm';

describe('<Container />', () => {
	it('renders a class for the respective container size', () => {
		const size = faker.helpers.arrayElement(['xs', 'sm', 'md', 'lg', 'xl']);
		const children = faker.word.noun();
		const { getByText } = render(html`<${Container} size=${size}>${children}</${Container}>`);

		expect(getByText(children)).toHaveClass(`container--${size}`);
	});
});

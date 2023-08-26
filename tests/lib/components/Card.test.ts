import { render } from '@testing-library/svelte';
import { faker } from '@faker-js/faker';
import html from 'svelte-htm';

import Card from '$lib/components/Card.svelte';

describe('<Card />', () => {
	it('renders an image if provided', () => {
		const image = faker.image.url();
		const { getByRole } = render(Card, { image });
		expect(getByRole('img')).toHaveProperty('src', image);
	});

	it('renders Card content', () => {
		const content = faker.lorem.sentence();
		const { getByText } = render(html`
      <${Card}>
          <p slot="content">${content}</p>
      </${Card}>
    `);
		expect(getByText(content).parentElement).toHaveClass('card__content');
	});

	it('renders Card actions', () => {
		const content = faker.word.verb();
		const { getByRole } = render(html`
      <${Card}>
          <button slot="actions">${content}</button>
      </${Card}>
    `);
		expect(getByRole('button').parentElement).toHaveClass('card__actions');
	});
});

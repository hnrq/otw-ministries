import { render } from '@testing-library/svelte';
import { faker } from '@faker-js/faker';
import html from 'svelte-htm';

import Link from '$lib/components/Link.svelte';

describe('<Link />', () => {
	it.skip('renders with `link--active` CSS class if its href is equal to the current page', () => {
		const href = `/${faker.word.noun()}`;
		Object.defineProperty(window, 'location', {
			value: { pathname: href },
			writable: true
		});
		const link = faker.word.verb();
		const { getByText } = render(html`<${Link} href=${href}>${link}</${Link}>`);

		expect(getByText(link)).toHaveClass('link--active');
	});
});

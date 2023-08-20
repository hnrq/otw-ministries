import { render } from '@testing-library/svelte';

import Header from '$layouts/Header.svelte';

describe('<Header />', () => {
	it.each(['About', 'Referral Services', 'Events', 'Contact', 'Support'])(
		'renders a link to the %s page',
		(link) => {
			const { getByText } = render(Header);
			expect(getByText(link)).toBeInTheDocument();
		}
	);
});

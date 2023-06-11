import Footer from '$layouts/Footer.svelte';
import { render } from '@testing-library/svelte';

describe('<Footer />', () => {
	it('renders the Logo', () => {
		expect(render(Footer).getByRole('img')).toBeInTheDocument();
	});
	it('renders the phone');
});

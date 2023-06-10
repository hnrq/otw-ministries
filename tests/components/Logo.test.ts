import { render } from '@testing-library/svelte';

import Logo from '$components/Logo.svelte';

describe('<Logo />', () => {
	it('renders an svg', () => {
		expect(render(Logo).getByRole('img')).toBeInstanceOf(SVGElement);
	});
});

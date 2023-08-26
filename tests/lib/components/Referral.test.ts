import Referral from '$lib/components/Referral.svelte';
import type { Referral as ReferralType } from '$lib/components/Referral.svelte';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/svelte';

describe('<Referral />', () => {
	it.each(['name', 'note', 'url'])('renders the %s', (property) => {
		const referral = {
			name: faker.word.noun(),
			url: faker.internet.url(),
			note: faker.lorem.sentence()
		};
		const { getByText } = render(Referral, { referral });

		expect(getByText(referral[property as keyof ReferralType])).toBeInTheDocument();
	});
});

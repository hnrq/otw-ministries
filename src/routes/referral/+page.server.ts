import type { EntryFieldTypes } from 'contentful';

import contentful from '$lib/contentful';
import type { Referral } from '$lib/components/Referral.svelte';

type ReferralSection = {
	name: string;
	referrals: Referral[];
};

type ReferralSkeleton = {
	contentTypeId: 'referral';
	fields: {
		name: EntryFieldTypes.Text;
		link: EntryFieldTypes.Text;
		category: EntryFieldTypes.Text;
	};
};

export const load = async () => {
	const referrals = await contentful.getEntries<ReferralSkeleton>({ content_type: 'referral' });
	const referralsByCategory = referrals.items.reduce(
		(acc, referral) => ({
			...acc,
			[referral.fields['category']]: {
				name: referral.fields['category'],
				referrals: [...(acc[referral.fields['category']]?.referrals ?? []), referral.fields]
			}
		}),
		{} as Record<string, ReferralSection>
	);

	return { referralSections: Object.values(referralsByCategory) };
};

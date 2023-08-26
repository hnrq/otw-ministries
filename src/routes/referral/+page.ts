import referrals from '$lib/assets/referrals.json';
import type { Referral } from '$lib/components/Referral.svelte';

type ReferralSection = {
	name: string;
	subtitle?: string;
	referrals: Referral[];
};

export function load() {
	return { referralSections: referrals as ReferralSection[] };
}

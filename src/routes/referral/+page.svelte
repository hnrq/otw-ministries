<script lang="ts">
	import Referral from '$lib/components/Referral.svelte';

	export let data: import('./$types').PageData;
</script>

<section class="referrals">
	<h2>Referral Services</h2>
	<small class="referrals__subtitle"> Relevant info for aiding</small>
	<div class="referrals__sections">
		{#each data.referralSections as referralSection}
			<div class="referrals__section">
				<h3>{referralSection.name}</h3>
				{#if referralSection.subtitle}
					<small class="referrals__section-subtitle">{referralSection.subtitle}</small>
				{/if}
				<div class="referrals__children">
					{#each referralSection.referrals as referral}
						<Referral {referral} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '$lib/theme/utils';

	.referrals {
		&__sections {
			display: flex;
			flex-direction: column;
			gap: utils.spacing(2);
		}

		&__subtitle,
		&__section-subtitle {
			color: var(--text-medium);
			display: block;
		}

		&__section-subtitle {
			margin-bottom: utils.spacing(1);
		}

		&__subtitle {
			margin-bottom: utils.spacing(4);
		}

		&__children {
			margin: 0 utils.spacing(1);
		}
	}
</style>

<script lang="ts" context="module">
	export interface Referral {
		name: string;
		note?: string;
		link: string;
	}
</script>

<script lang="ts">
	export let referral: Referral;
</script>

<a class="referral" href={referral.link}>
	<svg
		class="referral__icon"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
	>
		<path
			d="M11.25 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11.25V8.5H7C6.03333 8.5 5.20833 8.84167 4.525 9.525C3.84167 10.2083 3.5 11.0333 3.5 12C3.5 12.9667 3.84167 13.7917 4.525 14.475C5.20833 15.1583 6.03333 15.5 7 15.5H11.25V17ZM8.125 12.75V11.25H15.875V12.75H8.125ZM12.75 17V15.5H17C17.9667 15.5 18.7917 15.1583 19.475 14.475C20.1583 13.7917 20.5 12.9667 20.5 12C20.5 11.0333 20.1583 10.2083 19.475 9.525C18.7917 8.84167 17.9667 8.5 17 8.5H12.75V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H12.75Z"
			fill="black"
		/>
	</svg>
	<h5 class="referral__name">{referral.name}</h5>
	{#if referral.note}
		<small class="referral__note">{referral?.note}</small>
	{/if}
	<small class="referral__link">{referral.link}</small>
</a>

<style lang="scss">
	@use '$lib/theme/utils';

	.referral {
		text-decoration: none;
		display: grid;
		grid-template: 1fr auto 1rem / auto 1fr;
		column-gap: utils.spacing(1);

		&__icon {
			grid-area: 1 / 1 / 2 / 2;
		}

		&__name {
			grid-area: 1 / 2 / 2 / 3;
			margin: 0;
		}

		&__note {
			color: var(--text-medium);
			font-style: italic;
			grid-area: 2 / 2 / 3 / 3;
		}

		&__link {
			color: var(--text-medium);
			font-style: italic;
			max-width: 200px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			grid-area: 3 / 2 / 4 / 3;
		}
	}
</style>

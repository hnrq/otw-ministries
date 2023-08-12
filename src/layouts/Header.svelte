<script lang="ts">
	import Link from '$components/Link.svelte';
	import Logo from '$components/Logo.svelte';
</script>

<nav class="header">
	<Link href="/"><Logo width={40} height={40} /></Link>
	<div class="header__links">
		<Link href="/about">About</Link>
		<Link href="/referral">Referral Services</Link>
		<Link href="/contact">Contact</Link>
		<Link href="/support">Support</Link>
	</div>
</nav>

<style lang="scss">
	@use '$theme/utils';

	.header {
		display: flex;
		margin: utils.spacing(4) 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: utils.spacing(2);

		&__links {
			gap: utils.spacing(1);
			display: flex;
		}
	}
</style>

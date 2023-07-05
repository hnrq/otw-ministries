<script lang="ts">
	import Link from '$components/Link.svelte';
	import Logo from '$components/Logo.svelte';
</script>

<nav class="header">
	<Link href="/"><Logo /></Link>
	<div class="header__links">
		<Link href="/about">About Us</Link>
		<Link href="/referral">Referral Services</Link>
		<Link href="/contact">Contact Us</Link>
		<Link href="/support">Support Us</Link>
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

<script lang="ts">
	import Link from '$components/Link.svelte';
	import Logo from '$components/Logo.svelte';
	import { _ } from 'svelte-i18n';
</script>

<nav class="header">
	<Link href="/"><Logo /></Link>
	<div class="header__links">
		<Link href="/about">{$_('header.about')}</Link>
		<Link href="/referral">{$_('header.referral')}</Link>
		<Link href="/contact">{$_('header.contact')}</Link>
		<Link href="/support">{$_('header.support')}</Link>
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

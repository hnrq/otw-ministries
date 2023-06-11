<script lang="ts">
	import Link from '$components/Link.svelte';
	import Logo from '$components/Logo.svelte';
	import { _ } from 'svelte-i18n';
</script>

<nav class="header">
	<Logo />
	<Link href="/about">{$_('header.about')}</Link>
	<Link href="/referral">{$_('header.referral')}</Link>
	<Link href="/contact">{$_('header.contact')}</Link>
	<Link href="/support">{$_('header.support')}</Link>
</nav>

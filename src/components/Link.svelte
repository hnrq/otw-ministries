<script lang="ts">
	import { page } from '$app/stores';
	import classNames from 'classnames';

	export let href: string;

	const isActive = $page.url.pathname === href;
</script>

<a {href} class={classNames('link', { 'link--active': isActive })}><slot /></a>

<style lang="scss">
	.link {
		text-decoration: none;
		text-transform: uppercase;
		&--active {
			font-weight: bold;
		}
	}
</style>

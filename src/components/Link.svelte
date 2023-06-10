<script lang="ts">
	import classNames from 'classnames';

	export let href: string;

	const isActive = window.location.pathname === href;
	console.log(window.location.pathname, href);
</script>

<a {href} class={classNames('link', { 'link--active': isActive })}><slot /></a>

<style lang="scss">
	.link {
		font-family: 'Karla';
		&--active {
			font-weight: bold;
		}
	}
</style>

<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section class="home">
	<h1 class="home__title">{$_('home.title')}</h1>
	<div class="home__picture" />
</section>

<style lang="scss">
	.home {
		&__title {
			font-style: italic;
		}

		&__picture {
			max-width: 500px;
			height: 500px;
			background-color: gray;
		}
	}
</style>

<section class="home">
	<h1 class="home__title">
		We assist people back into society by attending basic needs with a
		<span class="home__highlight">spiritual emphasis</span>.
	</h1>
	<div class="home__picture" />
</section>

<style lang="scss">
	.home {
		position: relative;

		&__title {
			max-width: 500px;
			font-style: italic;
		}

		&__highlight {
			font: var(--header-font);
			color: var(--primary-color);
		}

		&__picture {
			position: absolute;
			right: 0;
			top: 0;
			z-index: -1;
			width: 500px;
			height: 500px;
			background-color: lightgray;
		}
	}
</style>

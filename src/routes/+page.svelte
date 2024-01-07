<section class="home">
	<h1 class="home__title">
		We assist people back into society by attending basic needs with a
		<span class="home__highlight">spiritual emphasis</span>.
	</h1>
	<img class="home__picture" src="/images/tommie.webp" alt="" />
</section>

<style lang="scss">
	@use '$lib/theme/utils';

	.home {
		position: relative;

		&__title {
			max-width: 500px;
			font-style: italic;
		}

		&__highlight {
			animation: 1s ease-out 0.5s 1 highlight;
			animation-fill-mode: forwards;
			font: var(--header-font);
		}

		&__picture {
			animation: 1s ease-out 0s 1 fadein;
			position: absolute;
			display: none;
			@include utils.breakpoint-up('md') {
				display: block;
			}
			opacity: 0;
			animation-fill-mode: forwards;
			right: 0;
			top: 0;
			z-index: -1;
			object-fit: cover;
			width: 500px;
			height: 500px;
			background-color: lightgray;
		}
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.9;
		}
	}

	@keyframes highlight {
		0% {
			color: var(--text-color);
		}

		100% {
			color: var(--primary-color);
		}
	}
</style>

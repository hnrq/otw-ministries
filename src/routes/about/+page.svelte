<section class="about">
	<div class="about__text">
		<h2 class="about__title">About us</h2>
		<small class="about__subtitle">Blessed by God to be a blessing to his people</small>
		<p>
			Outside the Walls Ministries (OTWM) was organized by Rev. Tommie A. Johnson in 2005. The
			ministry was designed to assist men and women to successfully re-enter mainstream living. OTWM
			promotes the reconnection of families, broken due to incarceration. This ministry links
			ex-offenders to the needed resources that will foster self- sufficiency. This non-for-profit
			organization works diligently to serve those in need.
		</p>
		<h4>We work with juveniles and adults</h4>
		<p>
			We work with those with or without gang affiliations. We work with those incarcerated and
			formerly incarcerated. We also work with the addicted and formerly addicted to drugs and
			alcohol. Our ministry extends its support far beyond incarcerations, addiction and gang
			affiliations.
		</p>
	</div>
	<div class="about__image">
		<div class="img" />
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<small class="about__image-caption">
			“For I was an hungered, and ye gave me meat: I was thirsty, and ye gave me drink: I was a
			stranger, and ye took me in: Naked, and ye clothed me: I was sick and ye visited me: I was in
			prison, and ye came unto me.”<br />Matthew 25:35&36 KJV
		</small>
	</div>
</section>

<style lang="scss">
	@use '$lib/theme/utils';

	.about {
		display: flex;
		gap: utils.spacing(2);

		@include utils.breakpoint-down('sm') {
			flex-direction: column;
		}

		&__text {
			flex: 1;
		}

		&__title {
			margin: 0;
		}

		&__subtitle {
			color: var(--text-medium);
		}

		&__image {
			flex: 1;
			@include utils.breakpoint-down('sm') {
				margin-bottom: utils.spacing(3);
			}
			&-caption {
				text-align: right;
				display: block;
			}
		}
	}

	.img {
		width: 100%;
		height: 400px;
		background-color: lightgray;
		margin-bottom: utils.spacing(1);
	}
</style>

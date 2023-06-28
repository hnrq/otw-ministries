<script lang="ts">
	import { _, json } from 'svelte-i18n';

	const subsections = $json('about.subsections') as Array<{
		title: string;
		text: string;
	}>;
</script>

<section class="about">
	<div class="about__text">
		<h2 class="about__title">{$_('about.title')}</h2>
		<small class="about__subtitle">{$_('about.subtitle')}</small>
		<p>{$_('about.text')}</p>
		{#each subsections as subsection}
			<h3>{subsection.title}</h3>
			<p>{subsection.text}</p>
		{/each}
	</div>
	<div class="about__image">
		<div class="img" />
		<small class="about__image-caption">{@html $_('about.imageCaption')}</small>
	</div>
</section>

<style lang="scss">
	@use '$theme/utils';

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

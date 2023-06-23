<script lang="ts">
	import { _ } from 'svelte-i18n';

	const subsections = $_('about.subsections') as unknown as Array<{ title: string; text: string }>;
</script>

<section class="about">
	<h2>{$_('about.title')}</h2>
	<small class="about__subtitle">{$_('about.subtitle')}</small>
	<p>{$_('about.text')}</p>
	{#each subsections as subsection}
		<h5>{subsection.title}</h5>
		<p>{subsection.text}</p>
	{/each}
</section>

<style lang="scss">
	.about {
		&__subtitle {
			color: var(--text-medium);
		}
	}
</style>

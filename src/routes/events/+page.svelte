<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import ImageDialog from '$lib/components/ImageDialog.svelte';
	import format from 'date-fns/format';
	import { openModal } from 'svelte-modals';

	export let data: import('./$types').PageData;
</script>

<section class="events">
	<h2>Events</h2>
	<div class="events__list">
		{#each data.events as event}
			<div
				class="event"
				class:event--past={new Date(event.fields['endDate']).getTime() < Date.now()}
			>
				<!-- @ts-expect-error -->
				<Card image={event.fields.image?.fields.file.url}>
					<svelte:fragment slot="content">
						<p class="event__name"><strong>{event.fields['name']}</strong></p>
						{#if event.fields['startDate']}
							<small>
								{format(new Date(event.fields['startDate']), 'MMM dd yyyy, HH:mm')} - {format(
									new Date(event.fields['endDate']),
									'MMM dd yyyy, HH:mm'
								)}
							</small>
							<br />
						{/if}
						{#if event.fields['address']}<small>{event.fields['address']}</small>{/if}
					</svelte:fragment>
					<Button
						slot="actions"
						on:click={() => openModal(ImageDialog, { src: event.fields.image?.fields.file.url })}
					>
						See more
					</Button>
				</Card>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '$lib/theme/utils';

	.events {
		&__list {
			display: grid;
			gap: utils.spacing(2);
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}

	.event {
		&--past {
			opacity: 0.5;
		}

		&__name {
			margin: 0;
			margin-bottom: utils.spacing(1);
		}
	}
</style>

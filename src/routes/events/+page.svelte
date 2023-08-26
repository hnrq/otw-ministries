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
		{#each data.events.sort((ev1, ev2) => new Date(ev2.endDate).getTime() - new Date(ev1.endDate).getTime()) as event}
			<div class="event" class:event--past={new Date(event.endDate).getTime() < Date.now()}>
				<Card image={event.img}>
					<svelte:fragment slot="content">
						<p class="event__name"><strong>{event.name}</strong></p>
						<small>
							{format(new Date(event.startDate), 'MMM dd yyyy, HH:mm')} - {format(
								new Date(event.endDate),
								'MMM dd yyyy, HH:mm'
							)}
						</small>
						<br />
						<small>{event.address}</small>
					</svelte:fragment>
					<Button slot="actions" on:click={() => openModal(ImageDialog, { src: event.img })}>
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

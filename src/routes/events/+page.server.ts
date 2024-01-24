import type { EntryFieldTypes } from 'contentful';

import contentful from '$lib/contentful';

type EventSkeleton = {
	contentTypeId: 'event';
	fields: {
		name: EntryFieldTypes.Text;
		address: EntryFieldTypes.Text;
		image: EntryFieldTypes.AssetLink;
		startDate: EntryFieldTypes.Text;
		endDate: EntryFieldTypes.Text;
		description: EntryFieldTypes.RichText;
	};
};

export const load = async () => {
	const events = await contentful.getEntries<EventSkeleton>({ content_type: 'event' });

	return {
		events: events.items.map((entry) => ({
			...entry,
			fields: {
				...entry.fields,
				image: entry.fields.image as { fields: { file: { url: string } } }
			}
		}))
	};
};

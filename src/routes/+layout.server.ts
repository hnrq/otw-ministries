import { waitLocale } from 'svelte-i18n';
import '../i18n';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	await waitLocale();
	return {};
}

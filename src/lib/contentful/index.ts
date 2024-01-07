import { CONTENTFUL_SPACE, CONTENTFUL_KEY } from '$env/static/private';

import contentful from 'contentful';

export default contentful.createClient({
	space: CONTENTFUL_SPACE,
	accessToken: CONTENTFUL_KEY
});

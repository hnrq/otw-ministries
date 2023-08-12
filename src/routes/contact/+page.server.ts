import { fail } from '@sveltejs/kit';
import validator from 'email-validator';
import { SMTP_RECIPIENT, SMTP_SENDER } from '$env/static/private';
import transporter from '$utils/transporter';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const { email, phone, name, content, subject } = Object.fromEntries(data.entries());

		if (!name) return fail(400, { name, missing: true });
		if (!content) return fail(400, { content, missing: true });
		if (!subject) return fail(400, { subject, missing: true });
		if (email && !validator.validate(email.toString())) return fail(400, { email, invalid: true });

		console.log(SMTP_SENDER, SMTP_RECIPIENT);

		await transporter.sendMail({
			from: SMTP_SENDER,
			to: SMTP_RECIPIENT,
			subject: `New contact from ${name}`,
			text: content?.toString(),
			html: `
			<div>
			<p><h2>${subject}</h2></p>
			<p><b>From:</b> ${name} &lt;${email?.toString().toLowerCase()}&gt; ${phone
				?.toString()
				.toLowerCase()}</p>
				<p>${content}</p>
			</div>
			`
		});

		return { success: true };
	}
};

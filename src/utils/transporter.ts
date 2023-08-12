import { google } from 'googleapis';
import nodemailer from 'nodemailer';

import {
	CLIENT_ID,
	CLIENT_SECRET,
	REFRESH_TOKEN,
	SMTP_PORT,
	SMTP_USERNAME
} from '$env/static/private';

const createTransporter = async () => {
	const oauth2Client = new google.auth.OAuth2(
		CLIENT_ID,
		CLIENT_SECRET,
		'https://developers.google.com/oauthplayground'
	);

	oauth2Client.setCredentials({
		refresh_token: REFRESH_TOKEN
	});

	const accessToken = await new Promise((resolve, reject) => {
		oauth2Client.getAccessToken((err, token) => {
			if (err) reject(err);
			resolve(token);
		});
	});

	return nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: SMTP_PORT,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: SMTP_USERNAME,
			accessToken,
			clientId: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			refreshToken: REFRESH_TOKEN
		}
	} as unknown as nodemailer.TransportOptions);
};

const transporter = await createTransporter();

export default transporter;

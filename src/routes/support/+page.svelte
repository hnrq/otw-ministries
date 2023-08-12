<script lang="ts">
	import Icon from 'svelte-awesome';
	import paypal from 'svelte-awesome/icons/paypal';
</script>

<section class="support">
	<h2>Support us</h2>
	<small class="support__subtitle">
		Please help us move forward to continue to serve those in their journey to freedom and recovery
	</small>

	<form action="https://www.paypal.com/donate" method="post" target="_blank">
		<input type="hidden" name="hosted_button_id" value="RD6X3RFSVSLEY" />
		<button class="paypal-button"
			><Icon data={paypal} style="fill: #003087;" /> Donate on PayPal</button
		>
	</form>

	<div class="support__check">
		<h3>Checks</h3>
		<p>
			Checks can be mailed to:<br />
			Outside the Walls Ministries<br />
			601 S. California<br />
			Chicago, IL. 60612<br />
		</p>

		<p>For any questions, please reach out through <a href="/contact">Contact us</a>.</p>
	</div>
</section>

<style lang="scss">
	@use '$theme/utils';

	.support {
		&__subtitle {
			color: var(--text-medium);
			margin-bottom: utils.spacing(4);
			display: block;
		}

		.paypal-button {
			background-color: #e5eff6;
			color: #003087;
			font-weight: bold;
			display: flex;
			gap: utils.spacing(1);
			padding: utils.spacing(2) utils.spacing(4);
			border: none;
		}

		&__check {
			margin-top: utils.spacing(3);
		}
	}
</style>

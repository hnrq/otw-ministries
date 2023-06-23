<script>
	import Container from '$components/Container.svelte';
	import Header from '$layouts/Header.svelte';
	import '$theme/index.scss';
</script>

<Header />
<Container size="lg">
	<slot />
</Container>

<style>
</style>

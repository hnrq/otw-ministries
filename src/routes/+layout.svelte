<script>
	import Container from '$components/Container.svelte';
	import Header from '$layouts/Header.svelte';
	import '$theme/index.scss';
</script>

<Header />
<Container size="md">
	<slot />
</Container>

<style>
</style>

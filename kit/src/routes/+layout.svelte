<Header />

<main class="grow">
	<slot />
</main>

<Footer />

<script lang="ts">
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import '../styles/app.css'
</script>

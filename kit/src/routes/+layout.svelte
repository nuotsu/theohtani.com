<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://theohtani.com" />
	{#if ogimage}
		<meta property="og:image" content={urlFor(ogimage).url()} />
	{/if}
</svelte:head>

<Header />

<main class="my-auto">
	<slot />
</main>

<Footer />

<script lang="ts">
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import { urlFor } from '$utils/sanity'
	import type { PageData } from './$types'
	import '../styles/app.css'

	export let data: PageData

	const { title, description, ogimage } = data.site
</script>

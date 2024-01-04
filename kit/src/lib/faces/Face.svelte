<figure>
	<img
		src={urlFor(face.image).size(200, 200).auto('format').url()}
		alt={face.emojis}
		width={200}
		height={200}
		loading="lazy"
		draggable="false"
	/>

	<div class="emojis text-xl">
		{#each Array.from(face.emojis) as str}
			<Emoji emoji={str} />
		{/each}
	</div>

	{#if typeof navigator !== 'undefined' && 'share' in navigator}
		<button class="action" on:click={share}>Share</button>
	{:else}
		<a class="action" href={downloadUrl}>Download</a>
	{/if}

	<cite class="sr-only">
		<a href={face.source}>{face.source}</a>
	</cite>
</figure>

<style>
	.emojis:has(button:hover) :global(button:not(:hover)) {
		opacity: 0.5;
	}
</style>

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import Emoji from './Emoji.svelte'

	export let face: Sanity.Face

	const downloadUrl = urlFor(face.image)
		.height(300)
		.format('png')
		.forceDownload(face.emojis + '.png')
		.url()

	async function share() {
		const response = await fetch(downloadUrl)
		const blob = await response.blob()
		const file = new File([blob], face.emojis + '.png', { type: blob.type })

		return await navigator.share({
			files: [file],
		})
	}
</script>

<article>
	<img
		src={urlFor(face.image).size(200, 200).auto('format').url()}
		alt={face.emoji}
		width={200}
		height={200}
		loading="lazy"
		draggable="false"
	/>

	<div>{face.emoji}</div>

	{#if typeof navigator !== 'undefined' && 'share' in navigator}
		<button on:click={share}>Share</button>
	{:else}
		<a href={urlFor(face.image).auto('format').url()}>Download</a>
	{/if}
</article>

<script lang="ts">
	import { urlFor } from '$utils/sanity'

	export let face: Sanity.Face

	async function share() {
		const url = urlFor(face.image).height(200).format('png').forceDownload(face.emoji).url()

		const response = await fetch(url)
		const blob = await response.blob()
		const file = new File([blob], `${face.emoji}.png`, { type: blob.type })

		return await navigator.share({
			files: [file],
		})
	}
</script>

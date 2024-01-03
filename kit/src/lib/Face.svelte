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
		<button>Share</button>
	{/if}
</article>

<script lang="ts">
	import { urlFor } from '$utils/sanity'

	export let face: Sanity.Face
</script>

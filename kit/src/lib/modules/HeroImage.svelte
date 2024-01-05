<figure>
	{#if image}
		{@const { width, height } = getImageDimensions(image)}

		<img
			src={urlFor(image).width(1600).auto('format').url()}
			alt={image.alt}
			{width}
			{height}
			loading="lazy"
			draggable="false"
		/>
	{/if}
</figure>

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'

	const { image } = $$props as Partial<{
		image: Sanity.Image
	}>
</script>

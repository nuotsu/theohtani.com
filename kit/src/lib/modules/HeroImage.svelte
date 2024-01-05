<picture>
	{#if image}
		{@const { width, height } = getImageDimensions(image)}

		<source srcset={urlFor(image).size(800, 500).auto('format').url()} media="(width <= 640px)" />

		<img
			class="object-cover"
			src={urlFor(image).width(1600).auto('format').url()}
			alt={image.alt}
			{width}
			{height}
			loading="lazy"
			draggable="false"
		/>
	{/if}
</picture>

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'

	const { image } = $$props as Partial<{
		image: Sanity.Image
	}>
</script>

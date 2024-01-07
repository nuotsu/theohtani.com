<section class="section space-y-4">
	<header class="richtext">
		<PortableText value={content} components={{}} />
	</header>

	<ul class="carousel gap-4 pb-3 max-md:full-bleed max-md:px-4">
		{#each $page.data.news as news}
			<li class="scroll-ml-4">
				<a class="group grid gap-2" href={news.url} target="_blank">
					<figure class="relative bg-blue/10">
						<img
							class="aspect-video w-full max-w-[300px] object-cover transition-[filter] group-hover:brightness-125"
							src={news.image.url}
							alt={news.image.alt}
							width={news.image.width}
							height={news.image.height}
							loading="lazy"
						/>

						<time class="absolute right-2 -bottom-2 action text-xs" datetime={news.published}>
							{format(new Date(news.published))}
						</time>
					</figure>

					<h3 class="h3 font-bold text-blue line-clamp-2">
						{news.headline}
					</h3>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	header :global(p > a:only-child) {
		font-size: theme('fontSize.sm');

		&:hover {
			color: theme('colors.blue');
		}
	}
</style>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import { page } from '$app/stores'

	const { content } = $$props as Partial<{
		content: any
	}>

	const { format } = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
</script>

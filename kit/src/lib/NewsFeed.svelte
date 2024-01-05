<section class="section space-y-4">
	<header>
		<h2 class="h2">Recent Shohei Ohtani News</h2>
		<p class="text-sm">
			<a href="https://www.espn.com/search/_/type/articles/q/shohei%20ohtani" target="_blank">
				Read more on ESPN.com
			</a>
		</p>
	</header>

	<ul class="flex gap-4 pb-3 snap-x snap-mandatory overflow-x-auto max-md:full-bleed max-md:px-4">
		{#each $page.data.news as news}
			<li class="snap-start scroll-ml-4 grow-0 shrink-0 basis-[min(80vw,300px)]">
				<a class="group grid gap-2" href={news.url} target="_blank">
					<figure class="transition-[filter] group-hover:brightness-125">
						<img
							class="aspect-video w-full max-w-[300px] object-cover"
							src={news.image.url}
							alt={news.image.alt}
							width={news.image.width}
							height={news.image.height}
							loading="lazy"
						/>
					</figure>

					<h3 class="h3">{news.headline}</h3>
					<p class="text-sm">
						<time datetime={news.published}>
							{format(new Date(news.published))}
						</time>
					</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	a:hover {
		color: theme('colors.blue');
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'

	const { format } = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
</script>

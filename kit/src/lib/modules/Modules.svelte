{#each modules as module (module._type)}
	{#if module._type === 'news-feed'}
		<NewsFeed {...module} />
		<!--
	{:else if module._type === 'embedded-player'}
		<EmbeddedPlayer {...module} />
	{:else if module._type === 'hero.home'}
		<HeroHome {...module} />
	-->
	{:else}
		<div data-type={module._type} />
	{/if}
{/each}

<script lang="ts">
	import NewsFeed from './NewsFeed.svelte'

	export let modules: Sanity.Module[] = []
</script>

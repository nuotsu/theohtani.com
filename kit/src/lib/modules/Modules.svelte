{#each modules as module (module._type)}
	{#if module._type === 'face-list'}
		<FaceList {...module} />
	{:else if module._type === 'hero.image'}
		<HeroImage {...module} />
	{:else if module._type === 'jersey-generator'}
		<JerseyGenerator {...module} />
	{:else if module._type === 'news-feed'}
		<NewsFeed {...module} />
	{:else}
		<div data-type={module._type} />
	{/if}
{/each}

<script lang="ts">
	import FaceList from '$lib/modules/faces/FaceList.svelte'
	import HeroImage from '$lib/modules/HeroImage.svelte'
	import JerseyGenerator from '$lib/modules/JerseyGenerator.svelte'
	import NewsFeed from './NewsFeed.svelte'

	export let modules: Sanity.Module[] = []
</script>

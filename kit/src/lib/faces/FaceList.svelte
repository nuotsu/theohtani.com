<section class="space-y-4 text-center">
	<h2>Recent faces of Shohei Ohtani</h2>

	{#if $emoji}
		<output class="text-xl">
			<Emoji emoji={$emoji} />
		</output>
	{/if}

	<ul class="flex gap-4 overflow-x-auto before:m-auto after:m-auto">
		{#each filteredFaces as face (face._id)}
			<li class="max-w-[100px]">
				<Face {face} />
			</li>
		{/each}
	</ul>
</section>

<script lang="ts">
	import { page } from '$app/stores'
	import Emoji from './Emoji.svelte'
	import Face from './Face.svelte'
	import { emoji } from './store'

	$: filteredFaces = ($page.data.faces as Sanity.Face[]).filter(
		(face) => !$emoji || Array.from(face.emojis).includes($emoji),
	)
</script>

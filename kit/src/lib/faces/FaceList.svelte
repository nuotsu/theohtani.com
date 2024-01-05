<section class="section space-y-4 text-center">
	<header>
		<h2 class="h2">Recent faces of Shohei Ohtani</h2>

		{#if $emoji}
			<output class="block text-xl text-blue anim-fade-to-r [&_button]:anim-fade">
				Current: {#key $emoji}<Emoji emoji={$emoji} />{/key}
			</output>
		{/if}
	</header>

	<ul
		class="flex gap-4 pb-3 overflow-x-auto before:m-auto after:m-auto max-md:full-bleed max-md:px-4"
	>
		{#each filteredFaces as face (face._id)}
			<li class="max-w-[100px] [&>*]:anim-fade">
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

	$: filteredFaces = $page.data.faces.filter(
		(face) => !$emoji || Array.from(face.emojis).includes($emoji),
	)
</script>

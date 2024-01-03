<section>
	<ul class="flex gap-4 overflow-x-auto before:m-auto after:m-auto">
		{#each $page.data.faces as face}
			<li class="max-w-[100px]">
				<Face {face} />
			</li>
		{/each}
	</ul>
</section>

<script lang="ts">
	import { page } from '$app/stores'
	import Face from './Face.svelte'
</script>

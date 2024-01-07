<a
	href="/"
	class="select-none relative max-w-max grid uppercase text-blue text-center font-bold {className}"
	aria-label={$page.data.site.title}
>
	<small>The</small>
	<CurvedText
		id="ohtani"
		class="h-[2em] mx-auto -mt-1 -mb-3 fill-blue text-2xl tracking-tighter"
		text="Ohtani"
		width={80}
		height={30}
	/>
	<small>.com</small>

	<strong class="absolute -bottom-1 right-3 text-xl text-red">17</strong>
</a>

<script lang="ts">
	import { page } from '$app/stores'
	import CurvedText from '$lib/CurvedText.svelte'

	const { class: className } = $$props as {
		class?: string
	}
</script>

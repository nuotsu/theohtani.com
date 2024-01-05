<footer class="section py-8 grid gap-4 text-center">
	<div class="max-w-screen-sm mx-auto leading-none text-black/30 text-xs text-justify">
		<PortableText value={site.disclaimer} components={{}} />
	</div>
	<p>&copy; {new Date().getFullYear()} <a href="/">{site.title}</a></p>
</footer>

<script lang="ts">
	import { page } from '$app/stores'
	import { PortableText } from '@portabletext/svelte'

	const { site } = $page.data
</script>

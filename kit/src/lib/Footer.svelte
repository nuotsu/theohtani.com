<footer class="section py-8 grid gap-8 text-center">
	<div class="flex max-md:flex-col items-center md:items-end justify-between gap-x-8 gap-y-4">
		<Logo />

		<nav class="[&_a:hover]:text-blue text-2xl">
			<ul class="flex gap-4">
				<li>
					<a
						href="https://instagram.com/shoheiohtani"
						target="_blank"
						aria-label="Instagram @shoheiohtani"
					>
						<IconInstagram />
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<div class="max-w-screen-sm mx-auto leading-none text-black/30 text-xs text-justify">
		<PortableText value={site.disclaimer} components={{}} />
	</div>
	<p class="text-blue">
		&copy; {new Date().getFullYear()} <a href="/" data-sveltekit-reload>{site.title}</a>
	</p>
</footer>

<script lang="ts">
	import { page } from '$app/stores'
	import IconInstagram from '$lib/icons/IconInstagram.svelte'
	import Logo from './Logo.svelte'
	import { PortableText } from '@portabletext/svelte'

	const { site } = $page.data
</script>

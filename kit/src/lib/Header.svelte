<header
	class="sticky top-0 z-10 p-4 bg-gradient-to-b from-white from-25% to-transparent before:absolute"
>
	<Logo class="mx-auto" />
</header>

<style lang="postcss">
	header::before {
		mask-image: linear-gradient(to bottom, #fff, #fff, transparent);
		@apply pointer-events-none -bottom-12 inset-0 backdrop-blur;
	}
</style>

<script>
	import Logo from './Logo.svelte'
</script>

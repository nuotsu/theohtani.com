<section class="section grid md:grid-cols-2 items-start gap-8">
	<header class="richtext">
		<PortableText value={content} components={{}} />

		<figure class="carousel gap-px [--size:100px] mt-4" bind:this={carousel}>
			{#if loading}
				<div class="grid place-content-center bg-blue text-white animate-pulse">Generating...</div>
			{/if}

			{#each urls as url (url)}
				<a class="bg-blue/10" href={url} target="_blank">
					<img src={url} alt="" />
				</a>
			{/each}

			{#each images as image}
				<a href={urlFor(image).auto('format').url()} target="_blank">
					<img src={urlFor(image).width(200).auto('format').url()} alt="" />
				</a>
			{/each}
		</figure>
	</header>

	<form class="grid sm:grid-cols-2 gap-4" on:submit|preventDefault={generateJersey}>
		<label>
			<b>Name on jersey:</b>
			<input
				class="input text-xl"
				name="name"
				type="text"
				placeholder="OHTANI"
				maxlength="20"
				required
			/>
		</label>

		<label>
			<b>Jersey number:</b>
			<input
				class="input text-xl"
				name="number"
				type="number"
				placeholder="17"
				min="0"
				max="9999"
				required
			/>
		</label>

		<label class="col-span-full">
			<p><b>OpenAI API key:</b> <small>Use DALL·E 3 for better results</small></p>
			<input class="input" name="apiKey" type="password" required />
		</label>

		<button
			class="action gap-1 text-lg col-span-full transition-filter hover:brightness-125"
			disabled={loading}
		>
			<IconJersey />
			Generate Jersey
		</button>

		{#if error}
			<p class="text-red">Something went wrong. Please try again.</p>
		{/if}
	</form>
</section>

<style lang="postcss">
	label {
		@apply grid gap-1;
	}

	a {
		@apply transition-[filter] hover:brightness-125;
	}
</style>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import OpenAI from 'openai'
	import IconJersey from '$lib/icons/IconJersey.svelte'
	import { urlFor } from '$utils/sanity'

	const { content, images = [] } = $$props as Partial<{
		content: any
		images: Sanity.Image[]
	}>

	let carousel: HTMLElement

	let loading = false
	let urls: string[] = []
	let error = false

	async function generateJersey({
		currentTarget,
	}: {
		currentTarget: EventTarget & HTMLFormElement
	}) {
		const data = new FormData(currentTarget)
		const openai = new OpenAI({
			apiKey: data.get('apiKey') as string,
			dangerouslyAllowBrowser: true,
		})

		loading = true

		setTimeout(() => {
			carousel.scrollTo({ left: 0, behavior: 'smooth' })
		}, 50)

		try {
			const response = await openai.images.generate({
				model: 'dall-e-3',
				prompt: `a photorealistic product photography shot of a single Dodgers Jersey (back-side)
				with the name "${data.get('name')}" in all caps and the number "${data.get('number')}".
				The jersey is laid on a table with a blue backdrop.
				The photograph is slightly angled for aesthetic purposes, and should not be a 3D render but extremely photorealistic.`,
				n: 1,
				style: 'natural',
				size: '1024x1024',
			})

			if (!response?.data?.[0].url) throw new Error()

			currentTarget.reset()
			loading = false
			urls = [response.data[0].url, ...urls]
		} catch {
			loading = false
			error = true
		}
	}
</script>

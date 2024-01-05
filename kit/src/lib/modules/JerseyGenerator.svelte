<section class="section grid md:grid-cols-2 gap-4">
	<header class="richtext">
		<PortableText value={content} components={{}} />
	</header>

	<form class="grid" on:submit|preventDefault={generateJersey}>
		<label>
			OpenAI API key:
			<input name="apiKey" type="text" placeholder="ski-{'*'.repeat(48)}" required />
		</label>

		<label>
			Name on jersey:
			<input name="name" type="text" placeholder="Ohtani" maxlength="15" required />
		</label>

		<label>
			Jersey number:
			<input name="number" type="number" placeholder="17" min="0" max="9999" required />
		</label>

		<button class="action">Generate Jersey</button>

		{#if loading || error || url}
			<div class="col-span-full">
				{#if loading}
					<div>Generating your jersey...</div>
				{/if}

				{#if error}
					<p>Something went wrong. Please try again.</p>
				{/if}

				{#if url}
					<a href={url}>
						<img src={url} alt="Generated Jersey" />
					</a>
				{/if}
			</div>
		{/if}
	</form>
</section>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import OpenAI from 'openai'

	const { content, image } = $$props as Partial<{
		content: any
		image: Sanity.Image
	}>

	let loading = false
	let url: string | undefined = undefined
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

		try {
			const response = await openai.images.generate({
				model: 'dall-e-3',
				prompt: `a photorealistic product photography shot of a Dodgers Jersey (back-side)
				with the name "${data.get('name')}" in all caps and the number "${data.get('number')}".
				The jersey is laid on a table with a blue backdrop.
				The photograph is slightly angled for aesthetic purposes.`,
				n: 1,
				style: 'natural',
				size: '1024x1024',
			})

			currentTarget.reset()
			loading = false
			url = response.data[0].url
		} catch {
			loading = false
			error = true
		}
	}
</script>

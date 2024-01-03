import { client, groq } from '$utils/sanity'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	const faces = await client.fetch(groq`*[_type == 'face']|order(date desc)`)

	return {
		faces,
	}
}
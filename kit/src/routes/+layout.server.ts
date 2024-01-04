import { client, groq } from '$utils/sanity'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	return await client.fetch<{
		site: Sanity.Site
		faces: Sanity.Face[]
	}>(groq`{
		'site': *[_type == 'site'][0],
		'faces': *[_type == 'face']|order(date desc)
	}`)
}

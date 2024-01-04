// See https://kit.svelte.dev/docs/types#app

import type { SanityAssetDocument } from '@sanity/client'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			site: Sanity.Site
			faces: Sanity.Face[]
		}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Sanity {
		// documents

		type Site = {
			title: string
			description: string
			ogimage: Image
		}

		type Face = {
			_id: string
			image: Image
			emojis: string
			date?: string
			source?: string
		}

		// objects

		type Image = SanityAssetDocument
	}
}

export {}

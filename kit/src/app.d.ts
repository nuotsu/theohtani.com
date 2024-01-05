// See https://kit.svelte.dev/docs/types#app

import type { SanityAssetDocument } from '@sanity/client'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			// layout
			site: Sanity.Site
			faces: Sanity.Face[]
			// page
			news: News[]
		}
		// interface PageState {}
		// interface Platform {}

		type News = {
			id: number
			headline: string
			url: string
			source: string
			image: {
				alt: string
				width: number
				height: number
				url: string
			}
			published: string
		}
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

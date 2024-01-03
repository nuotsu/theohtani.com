// See https://kit.svelte.dev/docs/types#app

import type { SanityAssetDocument } from '@sanity/client'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Sanity {
		// documents

		type Face = {
			image: Image
			emoji: string
			date?: string
			source: string
		}

		// objects

		type Image = SanityAssetDocument
	}
}

export {}

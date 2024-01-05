import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'ogimage',
			title: 'og:image',
			type: 'image',
		}),
		defineField({
			name: 'disclaimer',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
})

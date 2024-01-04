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
			name: 'description',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'ogimage',
			title: 'og:image',
			type: 'image',
		}),
	],
})

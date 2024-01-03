import { defineField, defineType } from 'sanity'
import { MdOutlineFaceRetouchingNatural } from 'react-icons/md'

export default defineType({
	name: 'face',
	title: 'Face',
	icon: MdOutlineFaceRetouchingNatural,
	type: 'document',
	fieldsets: [
		{
			name: 'face',
			title: 'Face',
			options: { columns: 2 },
		},
	],
	fields: [
		defineField({
			name: 'image',
			type: 'image',
			fieldset: 'face',
		}),
		defineField({
			name: 'emoji',
			type: 'string',
			fieldset: 'face',
		}),
		defineField({
			name: 'date',
			type: 'date',
		}),
		defineField({
			name: 'source',
			type: 'url',
		}),
	],
	preview: {
		select: {
			title: 'emoji',
			subtitle: 'date',
			media: 'image',
		},
	},
})

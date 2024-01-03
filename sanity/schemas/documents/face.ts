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
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'emojis',
			type: 'string',
			fieldset: 'face',
			validation: (Rule) => Rule.required(),
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
			title: 'emojis',
			subtitle: 'date',
			media: 'image',
		},
	},
})

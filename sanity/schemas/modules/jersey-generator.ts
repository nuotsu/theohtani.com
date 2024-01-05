import { defineField, defineType } from 'sanity'
import { VscJersey } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'jersey-generator',
	title: 'Jersey generator',
	icon: VscJersey,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'image',
			type: 'image',
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
			],
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'image',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Jersey generator',
			media,
		}),
	},
})

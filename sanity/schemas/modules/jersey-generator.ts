import { defineArrayMember, defineField, defineType } from 'sanity'
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
			name: 'images',
			type: 'array',
			of: [defineArrayMember({ type: 'image' })],
		}),
	],
	preview: {
		select: {
			content: 'content',
			images: 'images',
		},
		prepare: ({ content, images }) => ({
			title: getBlockText(content),
			subtitle: 'Jersey generator',
			media: images?.[0],
		}),
	},
})

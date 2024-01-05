import { defineField, defineType } from 'sanity'
import { MdOutlineFaceRetouchingNatural } from 'react-icons/md'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'face-list',
	title: 'Face list',
	icon: MdOutlineFaceRetouchingNatural,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Face list',
		}),
	},
})

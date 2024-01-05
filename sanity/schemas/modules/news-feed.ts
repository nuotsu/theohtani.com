import { defineField, defineType } from 'sanity'
import { VscMegaphone } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'news-feed',
	title: 'News feed',
	icon: VscMegaphone,
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
			subtitle: 'News feed',
		}),
	},
})

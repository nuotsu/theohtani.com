import { list, singleton } from './utils'
import type { StructureResolver } from 'sanity/desk'

import { VscServerProcess } from 'react-icons/vsc'
import { MdOutlineFaceRetouchingNatural } from 'react-icons/md'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Content')
		.items([
			singleton(S, 'Site', 'site').icon(VscServerProcess),
			list(S, 'Pages', 'page'),
			S.divider(),
			list(S, 'Faces', 'face').icon(MdOutlineFaceRetouchingNatural),
		])

export default structure

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'

export default defineConfig({
	name: 'default',
	title: 'TheOhtani.com',

	projectId: 'xnvjcxa4',
	dataset: 'production',

	plugins: [
		deskTool(),
		dashboardTool({
			widgets: [projectInfoWidget(), projectUsersWidget(), vercelWidget()],
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})

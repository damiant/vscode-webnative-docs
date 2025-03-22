// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
				src: './src/assets/webnative.svg',
			},
			social: {
				github: 'https://github.com/damiant/vscode-webnative',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.						
						{ label: 'Getting Started', slug: 'introduction/getting-started' },
						{ label: 'New Projects', slug: 'introduction/new-project' },
					],
				},
				{
					label: 'Web Projects',
					autogenerate: { directory: 'web-projects' },
				},
				{
					label: 'Features',
					autogenerate: { directory: 'features' },
				},				
				{
					label: 'Capacitor',
					autogenerate: { directory: 'capacitor' },
				},
				{
					label: 'Integrations',
					autogenerate: { directory: 'integrations' },
				}
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ]
		}),
	],
});

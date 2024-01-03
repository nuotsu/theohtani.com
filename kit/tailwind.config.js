/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {
				blue: '#005596',
				red: '#dc444f',
			},
			fontFamily: {
				sans: `'Big Shoulders', sans-serif`,
			},
		},
	},
	plugins: [],
}

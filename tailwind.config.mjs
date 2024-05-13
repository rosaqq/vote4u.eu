/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'45link': "url('/img/sym/link-45deg.svg')",
				'boxlink': "url('/img/sym/box-arrow-up-right.svg')"
			}
		}
	},
	plugins: [],
}

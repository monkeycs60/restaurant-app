/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			handwriting: ['Kaushan Script', 'cursive'],
			classic: ['Playfair Display', 'serif'],
			roboto: ['Roboto', 'sans-serif'],
			dancing: ['Dancing Script', 'cursive'],
			playfair: ['Playfair Display', 'serif'],
		},

		extend: {
			screens: {
				'3xl': '1700px',
			},
		},
	},
	plugins: [],
};

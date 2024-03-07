/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Nunito"', 'sans-serif'],
				inter: ['"Inter"', 'sans-serif'],
			},
			fontSize: {
				lg1: ['18px', '24.55px'],
				lg2: ['32px', '49.6px'],
				lg3: ['20px', '30px'],
				lg4: ['30px', '61px'],
				lg5: ['22px', '37.4px'],
				lg6: ['17px', '24.65px'],
				lg7: ['15px', '21.75px'],
				lg8: ['29.98px', '29.98px'],
				lg9: ['44px', '46.2px'],
				lg10: ['10px', '20.2px'],
				lg11: ['13px', '19px'],
			},
			height: {
				500: '500px',
				700: '700px',
				1000: '1000px',
				650: '41.3rem',
				675: '38rem',
			},
			spacing: {
				55: '55%',
				70: '72%',
			},
			borderRadius: {
				lg1: '32px',
			},
			colors: {
				orange: {
					50: '#FFFBF5',
					100: '#FFC46B',
					200: '#FFD38F',
					300: '#FFBE5C',
					400: '#FFAE33',
					500: '#FEA623',
					600: '#FB8F04',
					700: '#E87903',
					800: '#C55C02',
					900: '#752B01',
				},
				primary: {
					main: '#FEA623',
					light: '#FFC46B',
					dark: '#C55C02',
					50: '#FFFBF5',
					100: '#FFC46B',
					200: '#FFD38F',
					300: '#FFBE5C',
					400: '#FFAE33',
					500: '#FEA623',
					600: '#FB8F04',
					700: '#E87903',
					800: '#C55C02',
					900: '#752B01',
				},
				secondary: {
					main: '#FF0634',
					light: '#FFD1DA',
					dark: '#9D011E',
					50: '#FFF5F7',
					100: '#FFD1DA',
					200: '#FF8FA3',
					300: '#FF5C7A',
					400: '#FF3358',
					500: '#FF0634',
					600: '#DD042B',
					700: '#C20024',
					800: '#9D011E',
					900: '#6B0014',
				},
				neutral: {
					main: '#8D92AA',
					light: '#E9EAF2',
					dark: '#464C62',
					50: '#F1F5FE',
					100: '#E9EAF2',
					200: '#D9DAE3',
					300: '#BFC1CF',
					400: '#A5A8BB',
					500: '#8D92AA',
					600: '#7E84A0',
					700: '#5B607C',
					800: '#464C62',
					900: '#252937',
				},
				green: {
					main: '#00FB19',
					light: '#DAFFDA',
					dark: '#016A01',
					fade: '#ffedf1',
				},
				red: {
					main: '#F03C3C',
					light: '#FFDADA',
					dark: '#6A0101',
				},
			},
			animation: {
				pulseV2: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				spinV2: 'spinV2 3s linear infinite',
				spinV3: 'spinV3 1s linear infinite',
				typing:
					'typing 5s steps(3000, end) infinite, blinkCaret 1.5s step-end infinite, pause 5000ms infinite',
				u: 'bounceV2 1s infinite',
				p: 'bounceV2 2.5s infinite',
				d: 'bounceV2 3.5s infinite',
				a: 'bounceV2 5s infinite',
				t: 'bounceV2 6.5s infinite',
				i: 'bounceV2 8s infinite',
				n: 'bounceV2 9.5s infinite',
				g: 'bounceV2 11s infinite',
			},
			keyframes: {
				spinV2: {
					'0%, 100%': { transform: 'rotate(-0.5deg)' },
					'50%': { transform: 'rotate(0.5deg)' },
				},
				spinV3: {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' },
				},
				typing: {
					from: { width: '0' },
					to: { width: '100%' },
				},
				blinkCaret: {
					from: { borderColor: 'transparent' },
					to: { borderColor: 'transparent' },
					'50%': { borderColor: 'black' },
				},
				pause: {
					'0%': { width: '0' },
					'100%': { width: '101%' },
				},
				bounceV2: {
					'0%, 100%': {
						transform: 'translateY(-25%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(25%)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
		},
	},
	plugins: [],
};

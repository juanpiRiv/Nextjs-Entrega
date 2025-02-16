/** @type {import('tailwindcss').Config} */
export default {
	important: true,
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	extend: {
    		colors: {
    			text: '#e7f6fc',
    			background: '#04161e',
    			primary: '#7bc4ee',
    			secondary: '#4c128c',
    			accent: '#e644e7',
    			'color-1': 'hsl(var(--color-1))',
    			'color-2': 'hsl(var(--color-2))',
    			'color-3': 'hsl(var(--color-3))',
    			'color-4': 'hsl(var(--color-4))',
    			'color-5': 'hsl(var(--color-5))'
    		},
    		backgroundImage: {
    			'aurora-gradient': 'linear-gradient(90deg, hsl(var(--color-1)), hsl(var(--color-2)), hsl(var(--color-3)), hsl(var(--color-4)))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'aurora-border': {
    				'0%, 100%': {
    					borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
    				},
    				'25%': {
    					borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
    				},
    				'50%': {
    					borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
    				},
    				'75%': {
    					borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
    				}
    			},
    			'aurora-text-animation': {
    				'0%': {
    					backgroundPosition: '0% 50%'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%'
    				},
    				'100%': {
    					backgroundPosition: '0% 50%'
    				}
    			},
    			'aurora-1': {
    				'0%, 100%': {
    					top: '0',
    					right: '0'
    				},
    				'50%': {
    					top: '50%',
    					right: '25%'
    				},
    				'75%': {
    					top: '25%',
    					right: '50%'
    				}
    			},
    			'aurora-2': {
    				'0%, 100%': {
    					top: '0',
    					left: '0'
    				},
    				'60%': {
    					top: '75%',
    					left: '25%'
    				},
    				'85%': {
    					top: '50%',
    					left: '50%'
    				}
    			},
    			'aurora-3': {
    				'0%, 100%': {
    					bottom: '0',
    					left: '0'
    				},
    				'40%': {
    					bottom: '50%',
    					left: '25%'
    				},
    				'65%': {
    					bottom: '25%',
    					left: '50%'
    				}
    			},
    			'aurora-4': {
    				'0%, 100%': {
    					bottom: '0',
    					right: '0'
    				},
    				'50%': {
    					bottom: '25%',
    					right: '40%'
    				},
    				'90%': {
    					bottom: '50%',
    					right: '25%'
    				}
    			},
    			rainbow: {
    				'0%': {
    					'background-position': '0%'
    				},
    				'100%': {
    					'background-position': '200%'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		},
    		animation: {
    			'aurora-text-animation': 'aurora-text-animation 12s ease-in-out infinite alternate',
    			'aurora-border': 'aurora-border 6s ease-in-out infinite',
    			'aurora-1': 'aurora-1 12s ease-in-out infinite alternate',
    			'aurora-2': 'aurora-2 12s ease-in-out infinite alternate',
    			'aurora-3': 'aurora-3 12s ease-in-out infinite alternate',
    			'aurora-4': 'aurora-4 12s ease-in-out infinite alternate',
    			rainbow: 'rainbow var(--speed, 2s) infinite linear',
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};

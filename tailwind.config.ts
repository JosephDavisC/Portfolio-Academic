import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				heading: ['Manrope', 'system-ui', 'sans-serif'],
				sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				// Human-Centric Design System
				paper: '#F9F7F2',
				'paper-dark': '#F0EDE5',
				court: {
					DEFAULT: '#4CBB17',
					light: '#6DD035',
					dark: '#3A9012',
				},
				espresso: {
					DEFAULT: '#3D2B1F',
					light: '#5C4433',
					dark: '#2A1D15',
				},
				tennis: {
					DEFAULT: '#DFFF00',
					muted: '#C5E600',
				},
				neon: {
					blue: '#60A5FA',
					'blue-hover': '#93C5FD',
				},
				// Existing shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'brutal': '2px 2px 0px 0px #3D2B1F',
				'brutal-sm': '1px 1px 0px 0px #3D2B1F',
				'brutal-lg': '3px 3px 0px 0px #3D2B1F',
				'brutal-hover': '3px 3px 0px 0px #3D2B1F',
				'brutal-court': '2px 2px 0px 0px #3A9012',
				'brutal-espresso': '2px 2px 0px 0px #2A1D15',
				'neon-glow': '0 0 12px rgba(96, 165, 250, 0.6)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

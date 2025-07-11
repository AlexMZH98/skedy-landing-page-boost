
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
			colors: {
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
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-120px) scale(0.9)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateX(-20px) scale(0.95)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'translateX(0) scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(120px) scale(0.9)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateX(20px) scale(0.95)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'translateX(0) scale(1)',
						opacity: '1'
					}
				},
				'slide-in-up': {
					'0%': {
						transform: 'translateY(120px) scale(0.9)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateY(20px) scale(0.95)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1'
					}
				},
				'slide-in-down': {
					'0%': {
						transform: 'translateY(-120px) scale(0.9)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateY(-20px) scale(0.95)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1'
					}
				},
				'fade-slide-in': {
					'0%': {
						transform: 'translateY(80px) scale(0.85)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateY(10px) scale(0.92)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1'
					}
				},
				'zoom-in': {
					'0%': {
						transform: 'scale(0.3) rotate(-10deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05) rotate(2deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3) translateY(100px)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.1) translateY(-10px)',
						opacity: '0.8'
					},
					'70%': {
						transform: 'scale(0.95) translateY(5px)',
						opacity: '0.9'
					},
					'100%': {
						transform: 'scale(1) translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-left': 'slide-in-left 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'slide-in-right': 'slide-in-right 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'slide-in-up': 'slide-in-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'slide-in-down': 'slide-in-down 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'fade-slide-in': 'fade-slide-in 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'zoom-in': 'zoom-in 1.0s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'bounce-in': 'bounce-in 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Natural Eco-Friendly Green Palette
        primary: {
          DEFAULT: '#3D7C47', // Forest green
          hover: '#2D5A34',   // Dark forest
          light: '#E8F5E9',   // Soft sage
          lighter: '#F1F8F2', // Very light green
          50: '#F1F8F2',
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#81C784',
          500: '#66BB6A',
          600: '#3D7C47',
          700: '#2D5A34',
          800: '#1B5E20',
          900: '#0D3A12',
        },
        // Earthy Accent Colors
        earth: {
          sand: '#F5F0E6',
          warm: '#E8DFD0',
          brown: '#8B7355',
          olive: '#6B7B3A',
        },
        // Background Colors
        background: {
          DEFAULT: '#FAFBF9',
          secondary: '#F5F7F4',
          cream: '#FDFCF9',
          warm: '#F9F7F4',
        },
        // Text Colors
        text: {
          primary: '#1A2E1C',
          secondary: '#3D4F3E',
          muted: '#5A6B5C',
          light: '#8A9A8C',
        },
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        heading: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '300' }],
        'display-1': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-2': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-1': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-2': ['2rem', { lineHeight: '1.2' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'heading-4': ['1.25rem', { lineHeight: '1.35' }],
        'body-xl': ['1.375rem', { lineHeight: '1.65' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(61, 124, 71, 0.08)',
        'medium': '0 4px 25px -5px rgba(61, 124, 71, 0.1)',
        'strong': '0 10px 40px -10px rgba(61, 124, 71, 0.15)',
        'glow': '0 0 40px rgba(61, 124, 71, 0.15)',
        'inner-glow': 'inset 0 2px 20px rgba(61, 124, 71, 0.05)',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-natural': 'linear-gradient(135deg, #E8F5E9 0%, #F1F8F2 50%, #FAFBF9 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(61,124,71,0.03) 0%, transparent 50%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-up-delay': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config

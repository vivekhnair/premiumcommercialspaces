import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1F2933',
        navy: '#243B53',
        'soft-white': '#F8FAFC',
        gold: '#C8A96B',
        beige: '#E9DFC8',
        'light-gray': '#F5F7FA',
        'border-gray': '#D9E2EC',
        'dark-text': '#102A43',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Cormorant Garamond', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

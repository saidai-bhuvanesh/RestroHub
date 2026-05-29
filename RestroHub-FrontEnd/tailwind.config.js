// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', ['.dark', '.admin-dark']],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#d5f0ff',
          500: '#16b9f9',
          600: '#0ca4ea',
          700: '#0c88c2',
        },
        electric: {
          blue: '#2563eb',
          cyan: '#06b6d4',
          purple: '#a855f7',
          pink: '#ec4899',
          orange: '#f97316',
        },
        royal: {
          blue: '#3b82f6',
        },
        cyber: {
          blue: '#60a5fa',
          neon: '#00f7ff',
          magenta: '#ff00ff',
        },
        dark: {
          navy: '#020617',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-reveal': 'slideReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer-fast': 'shimmer 1.5s linear infinite',
        'blob': 'blob 7s infinite',
        'aurora': 'aurora 15s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideReveal: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(6,182,212,0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.2)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.8)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        borderSpin: {
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
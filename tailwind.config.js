/** @type {import('tailwindcss').Config} */
import { mtConfig } from "@material-tailwind/react";

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Design tokens: Blue Tech Dark palette
        brand: {
          bg: '#0B1120',        // slate-950 - background principal
          card: '#111827',      // gray-900  - tarjetas/secciones
          primary: '#2563EB',   // blue-600  - acento primario
          'primary-light': '#3B82F6', // blue-500
          secondary: '#06B6D4', // cyan-500  - acento secundario / mono tags
          border: '#1E293B',    // slate-800 - bordes
          text: '#F1F5F9',      // slate-100 - títulos
          muted: '#94A3B8',     // slate-400 - cuerpo
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.25), transparent)',
        'glow-blue': 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [mtConfig],
}

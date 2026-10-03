import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  hash: false,
  theme: {
    extend: {
      colors: {
        noite: '#16171e',
        painel: '#1e202c',
        cartao: '#232531',
        linha: '#31323e',
        lavanda: '#a99cdb',
        roxo: '#6f5fb3',
        'roxo-escuro': '#60519b',
        nevoa: '#bfc0d1',
        apagado: '#8b8ca3',
        gelo: '#eeecf5',
        ameixa: '#3e354e',
        malva: '#6c6082',
        lilas: '#9c93b1',
      },
      fontFamily: {
        titulo: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        piscar: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        piscar: 'piscar 1s steps(1) infinite',
      },
    },
  },
  preflight: {
    html: { scrollBehavior: 'smooth', scrollPaddingTop: '5rem' },
    '@media (prefers-reduced-motion: reduce)': {
      html: { scrollBehavior: 'auto' },
    },
    body: { backgroundColor: '#16171e', color: '#e4e4ee' },
    '::selection': { backgroundColor: '#6f5fb3', color: '#ffffff' },
    'a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible': {
      outline: '2px solid #a99cdb',
      outlineOffset: '3px',
    },
  },
})

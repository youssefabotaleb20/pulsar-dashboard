/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#080C10',
        surface: '#0F1419',
        panel:   '#141C24',
        border:  'rgba(255,255,255,0.06)',
        text:    '#E8EDF2',
        muted:   '#6B7A8D',
        cyan:    '#00D4FF',
        green:   '#00E5A0',
        amber:   '#FFB300',
        red:     '#FF4757',
        purple:  '#A855F7',
      },
      fontFamily: {
        mono:     ['"Space Mono"', 'monospace'],
        jakarta:  ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeIn:  { from: { opacity:'0', transform:'translateY(12px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        slideIn: { from: { opacity:'0', transform:'translateX(-20px)' }, to: { opacity:'1', transform:'translateX(0)' } },
        pulse:   { '0%,100%': { opacity:'1' }, '50%': { opacity:'0.35' } },
      },
      animation: {
        fadeIn:  'fadeIn 0.5s ease forwards',
        slideIn: 'slideIn 0.4s ease forwards',
        pulse:   'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}

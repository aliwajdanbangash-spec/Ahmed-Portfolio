/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './script.js'],
  // Prefix utilities (tw-) so they never collide with the existing custom
  // class names such as .container, .grid, .hidden, .text-accent, etc.
  prefix: 'tw-',
  // Preflight disabled: the existing stylesheet already provides a complete
  // reset and design tokens, so we keep the original look untouched and only
  // layer Tailwind utilities on top. The container plugin is disabled because
  // the site defines its own .container class.
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        'bg-card': '#111111',
        'bg-card-2': '#0d0d0d',
        ink: '#F5F5F5',
        'ink-sec': '#929292',
        accent: '#C8FF00',
        'accent-y': '#FFD60A',
        'accent-p': '#8B5CF6',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
      },
      screens: {
        xs: '380px',
      },
    },
  },
  plugins: [],
};
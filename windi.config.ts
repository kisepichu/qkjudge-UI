import { defineConfig } from 'windicss/helpers'

// extending the builtin windicss configurations
export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]'
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: ['Segoe UI', 'Dejavu Sans', 'Helvetica Neue', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Ricty Diminished', 'monospace']
      }
    }
  }
})

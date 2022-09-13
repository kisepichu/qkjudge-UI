import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

// extending the builtin windicss configurations
export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]'
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      light: colors.light,
      neutral: colors.neutral,
      herocyan: {
        100: '#8AFBFF'
      },
      heroyellow: {
        100: '#FCFFF5'
      },
      wj: {
        100: '#777'
      },
      ok: {
        100: '#5cb85c'
      },
      ng: {
        100: '#f0ad4e'
      },
      err: {
        100: '#d9534f'
      }
    },
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: ['Segoe UI', 'Dejavu Sans', 'Helvetica Neue', 'sans-serif'],
        jp: "'Ricty Diminished', 'M PLUS Rounded 1c', 'Segoe UI', 'sans-serif'",
        icon: "'Trebuchet MS', sans-serif",
        serif: ['Merriweather', 'serif'],
        mono: ['Ricty Diminished', 'Consolas', 'monospace']
      }
    }
  }
})

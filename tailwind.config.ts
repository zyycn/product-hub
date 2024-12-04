/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{vue,ts,tsx,scss}'],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map![index] = `${index}px`
      return map
    }, {}),
    extend: {
      fontSize: Array.from({ length: 100 }).reduce((map, _, index) => {
        map![index] = `${index}px`
        return map
      }, {})
    }
  },
  plugins: []
}

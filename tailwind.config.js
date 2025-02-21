/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./calculator/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],  // Replace with the font's name
      },
      colors: {
        darkviolet: 'hsl(278, 68%, 11%)',
        lightviolet: 'hsl(270, 3%, 87%)',
        vdesablue: 'hsl(var(--vdesablue))',
        whitecol: 'hsl(var(--whitecol))',
        lorange: 'hsl(var(--lorange))',
        vddarkblue: 'hsl(var(--vddarkblue))',
        vddeblue: 'hsl(var(--vddeblue))',
        bordern: 'hsl(var(--bordern))',
        cyanb: 'hsl(var(--cyanb))',
        keytext: 'hsl(var(--keytext))'
      }
    },
  },
  plugins: [],
}


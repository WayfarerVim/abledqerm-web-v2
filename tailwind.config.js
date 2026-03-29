module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // Add mdx
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#6B3E3E',
        burgundyDark: '#3D2626',
        burgundyLight: '#8A5252',
        gold: '#D4AF37',
        goldLight: '#E8CC6A',
        cream: '#F9F7F4',
        creamDark: '#F0EBE5',
        creamDeep: '#E6DDD4',
        charcoal: '#3D3D3D',
        midGray: '#6B6B6B',
        lightGray: '#A0A0A0',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    }
  },
  plugins: []
}

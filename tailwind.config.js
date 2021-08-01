module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      gray: {
        DEFAULT: '#1C1F23',
        50: '#86919E',
        100: '#788493',
        200: '#606A78',
        300: '#49515C',
        400: '#33383F',
        500: '#1C1F23',
        600: '#0E1012',
        700: '#010101',
        800: '#000000',
        900: '#000000',
      },
      primary: {
        DEFAULT: '#E24C4C',
        50: '#FFFFFF',
        100: '#FEFCFC',
        200: '#F7D0D0',
        300: '#F0A4A4',
        400: '#E97878',
        500: '#E24C4C',
        600: '#D82323',
        700: '#AC1C1C',
        800: '#801515',
        900: '#540E0E',
      },
      yellow: '#FACC15',
      green: '#22C55E',
      cyan: '#22D3EE',
    },
    extends: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      height: {
        102: '40rem',
      },
    },
  },
  // more options here
}

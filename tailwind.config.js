const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      green: colors.green,
      indigo: colors.indigo,
      blue: colors.blue,
      violet: colors.violet,
      purple: colors.purple,
      fuchia: colors.fuchia,
      pink: colors.pink,
      rose: colors.rose,

      black: colors.black,
      white: colors.white,
      customGray: '#282c34',
      customLightBlue: '#61dafb',
      customBlue: '#40798c',
      customTeal: '#70a9a1',
      customDarkBlue: '#15272d',
      customPaleGreen: '#9ec1a3',
      customLightGreen: '#cfe0c3',
      customYellow: '#FFD460',
      customGreen: '#00dc82',
      customPaleRed: '#d95757',
      customRed: '#db0d0d',
    },
    fontFamily: {
      segoeBold: ['segoeBold', 'sans-serif'],
      segoeNorm: ['segoeNorm', 'sans-serif'],
      segoeItalic: ['segoeItalic', 'sans-serif'],
      segoeBoldItalic: ['segoeBoldItalic', 'sans-serif'],
      alexandria: ['Alexandria', 'sans-serif'],
    },
    listStyleType: {
      disc: 'disc',
      circle: 'circle',
    },
  },
  variants: {},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

const colors = {
  error: {
    25: '#FFFBFA',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A'
  },
  primary: {
    25: '#FFE4E6',
    50: '#FFB3BF',
    100: '#FF7A8F',
    200: '#FF4D6E',
    300: '#FF2B5B',
    400: '#FF4F6D',
    500: '#FF1654',
    600: '#D5003A',
    700: '#A4002B',
    800: '#7A0020',
    900: '#4D0015'
  },
  gray: {
    25: '#F0F2F5',
    50: '#E4E7EC',
    100: '#c2c6cc',
    200: '#B2B7C2',
    300: '#acb0b9',
    400: '#999faa',
    500: '#667085',
    600: '#4B5563',
    700: '#344054',
    800: '#464a53',
    900: '#181818'
  },
  warning: {
    25: '#FFFCF5',
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E'
  },
  success: {
    25: '#F6FEF9',
    50: '#ECFDF3',
    100: '#D1FADF',
    200: '#A6F4C5',
    300: '#6CE9A6',
    400: '#32D583',
    500: '#10B757',
    600: '#039855',
    700: '#027A48',
    800: '#05603A',
    900: '#054F31'
  },
  transparent: 'transparent',
  current: 'currentColor',
  azureBlue: '#1F6CFF'
};
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};

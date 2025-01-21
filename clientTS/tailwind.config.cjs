/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    50: '#FFF9F5',
    100: '#FFF1E7',
    200: '#FFDCC3',
    300: '#FFC7A0',
    400: '#FFA672',
    500: '#FF8544', // New primary orange
    600: '#F46C24',
    700: '#D45618',
    800: '#AC4111',
    900: '#8A340D',
    950: '#431A06',
  },
  orange: {
    50: '#FFF7F5',
    100: '#FFEAE5',
    200: '#FFD5CC',
    300: '#FFB4A1',
    400: '#FF8C70',
    500: '#FF6347', // New vibrant coral
    600: '#F04D30',
    700: '#D63A1F',
    800: '#B32918',
    900: '#8C1F12',
    950: '#460F09',
  },
  rose: {
    50: '#FFF5F9',
    100: '#FFE5EF',
    200: '#FFD1E3',
    300: '#FFB1D0',
    400: '#FF8AB8',
    500: '#FF5C9E', // New rose pink
    600: '#F73F89',
    700: '#E02872',
    800: '#B81D5D',
    900: '#931748',
    950: '#4A0B24',
  },
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'text-reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 1s',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        reveal: {
          '0%': {
            scale: '1.5',
            opacity: '0.1'
          },
          '100%': {
            scale: '1',
            opacity: '1'
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      colors: {
        // Add the custom colors
        ...colors,

        // Semantic color mappings
        brand: colors.primary,
        accent: colors.orange,
        background: {
          50: '#FFFFFF', // Tailwind white
          100: '#F9FAFB', // Tailwind gray-50
          200: '#F3F4F6', // Tailwind gray-100
          300: '#E5E7EB', // Tailwind gray-200
          400: '#D1D5DB', // Tailwind gray-300
          500: '#9CA3AF', // Tailwind gray-400
        },

        // Common UI state colors derived from the palette
        success: {
          light: '#84cc16',  // Tailwind lime-500
          DEFAULT: '#65a30d', // Tailwind lime-600
          dark: '#4d7c0f',   // Tailwind lime-700
          100: '#f0f9eb',    // Tailwind lime-100
          200: '#d9f0c3',    // Tailwind lime-200
          500: '#65a30d',    // Tailwind lime-600
          700: '#4d7c0f',    // Tailwind lime-700
        },
        warning: {
          light: colors.orange[300], // Tailwind orange-300
          DEFAULT: colors.orange[500], // Tailwind orange-500
          dark: colors.orange[700], // Tailwind orange-700
          100: colors.orange[50], // Tailwind orange-50
          200: colors.orange[100], // Tailwind orange-100
          500: colors.orange[500], // Tailwind orange-500
          700: colors.orange[700], // Tailwind orange-700
        },
        error: {
          light: colors.rose[300],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
          100: colors.rose[50],
          200: colors.rose[100],
          500: colors.rose[500],
          700: colors.rose[700],
        },
        info: {
          light: colors.primary[300],
          DEFAULT: colors.primary[500],
          dark: colors.primary[700],
          100: colors.primary[50],
          200: colors.primary[100],
          500: colors.primary[500],
          700: colors.primary[700],

        },
      },
      // Add complementary background opacity utilities
      backgroundColor: {
        'primary-subtle': 'rgba(255, 133, 68, 0.1)',
        'orange-subtle': 'rgba(255, 99, 71, 0.1)',
        'rose-subtle': 'rgba(255, 92, 158, 0.1)',
      },
      // Add gradient utilities using the palette
      gradientColorStops: theme => ({
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}
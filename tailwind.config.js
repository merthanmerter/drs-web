// const production = process.env.NODE_ENV === "production";
// const mode = production ? "jit" : false;

module.exports = {
  // mode: 'jit',
  purge: [
    './dist/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    fontWeight: {
      light: 400,
      normal: 500,
      bold: 700,
    },
    extend: {
      width: {
        '20ch': '20ch',
        '25ch': '25ch',
        '30ch': '30ch',
        '35ch': '35ch',
        '40ch': '40ch',
        '45ch': '45ch',
        '50ch': '50ch',
      },
      colors: {
        'drs-blue': '#13a0e5',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      // keyframes: {
      //   wiggle: {
      //     '0%, 100%': {
      //       transform: 'rotate(-3deg)'
      //     },
      //     '50%': {
      //       transform: 'rotate(3deg)'
      //     },
      //   }
      // },
      // animation: {
      //   wiggle: 'wiggle 1s ease-in-out infinite',
      // },
      // backgroundImage: {
      //   'hero-1': "url('../img/bg-hero-1.png')",
      //   'hero-2': "url('../img/bg-hero-2.png')",
      // },
      minHeight: {
        'half-screen': '50vh',
        '75vh': '75vh',
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
      borderColor: ['hover'],
      borderWidth: ['hover'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('@themesberg/flowbite/plugin'),
  ],
}
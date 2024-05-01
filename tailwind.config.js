/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        libre: ['"Libre Baskerville"']
      },
        
      
      spacing:{
        '2/3': '66.666667%',
        '5/6': '83.333333%',
      },
      backgroundImage:{
        'hero-pattern': "url('/src/img/hero-banner-7462.jpg')",
      },
      colors: {
        'b-primary': '#D67476',
        'b-secondary': '#003060',
        'b-light': '#F5EFE0',
        'bk-primary': '#D67476',
      
        'bk-secondary': '#003060',
        'bk-light': '#F5EFE0',

        'primary': '#10B981', //green-600 from tailwindcss palette = #10B981
        'light': '#dfdbde',
        'darker': '#46261a',
        'secondary': '#fbbb40',
        'brand':`rgb(var(--color-brand)/<alpha-value>)`,

      }

    },
  },
  plugins: [],
}


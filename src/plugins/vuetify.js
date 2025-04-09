/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import themes from '@/helpers/themes'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      // rounded: 'sm'
    },
    VBtn: {
      // style: 'text-transform: none;', // single line styles
      //Multi line string styles
      /* style: `
        text-transform: none;
        background-color: #f00;
        color: #fff; /* Example:
        padding: 1rem 2rem;
        border-radius: 5px;
      ` */
      //Multi line Object styles
      /* style: {
        textTransform: 'none',
        backgroundColor: '#f00',
        color: '#fff',
        padding: '1rem 2rem',
        borderRadius: '5px'
      } */
    },
    VAppBar: {
      flat: true
    },
    VTextField: {
      style: 'box-shadow: none;'
    }
  },
  theme: {
    defaultTheme: 'light',
    variations: {
      colors: ['primary', 'secondary'], // Colors to generate variations for
      lighten: 3, // Number of lighter shades to generate
      darken: 3 // Number of darker shades to generate
    },
    themes,
    typography: {
      defaultFontFamily: 'Roboto, sans-serif',
      fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700
      }
    }
  }
})

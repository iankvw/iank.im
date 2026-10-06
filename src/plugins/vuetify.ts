/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

import { md3 } from 'vuetify/blueprints'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'iankim',
    themes: {
      iankim: {
        dark: false,
        colors: {
          primary: '#A91D3A',
          background: '#F5F5F7',
          surface: '#FFFFFF',
          'on-surface': '#1C1C1E',
          'on-background': '#1C1C1E',
        },
      },
      iankimDark: {
        dark: true,
        colors: {
          primary: '#E53950',
          background: '#000000',
          surface: '#1C1C1E',
          'on-surface': '#F5F5F7',
          'on-background': '#F5F5F7',
        },
      },
    },
  },
})

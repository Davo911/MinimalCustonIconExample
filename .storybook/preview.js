import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/animate/fadeInUp.css'
import '@quasar/extras/animate/fadeOutDown.css'
import '@quasar/extras/animate/fadeInRight.css'
import '@quasar/extras/animate/fadeOutRight.css'
import 'quasar/dist/quasar.css'
import '../src/css/app.scss'
import '../src/css/dt-font.icons.scss'

import { app } from '@storybook/vue3'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex';
import { Quasar } from 'quasar'

app.use(VueI18n)
app.use(Vuex)
app.use(Quasar, {})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
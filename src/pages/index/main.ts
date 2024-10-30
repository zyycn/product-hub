import { createApp } from 'vue'

import App from './App.vue'

import PrimeVueUi from '@/utils/prime-vue-ui'

import 'normalize.css'

const app = createApp(App)

app.use(PrimeVueUi)
app.mount('#app')

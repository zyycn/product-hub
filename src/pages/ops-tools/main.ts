import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import PrimeVueUi from '@/utils/prime-vue-ui'
import ProdConsole from '@/utils/prod-console'
import Nprogress from '@/utils/nprogress'

import 'normalize.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVueUi)
app.use(Nprogress, router)
app.use(ProdConsole)

app.mount('#app')

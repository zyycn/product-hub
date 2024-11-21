import { createApp } from 'vue'
import App from './App.vue'

import ProdConsole from '@/utils/prod-console'
import Iconify from '@/utils/iconify'

import 'normalize.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(ProdConsole)
app.use(Iconify)

app.mount('#app')

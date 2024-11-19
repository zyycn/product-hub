import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import ProdConsole from '@/utils/prod-console'
import Nprogress from '@/utils/nprogress'
import Iconify from '@/utils/iconify'

import 'virtual:uno.css'
import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ProdConsole)
app.use(Nprogress, router)
app.use(Iconify)

app.mount('#app')

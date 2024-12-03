import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import ProdConsole from '@/plugins/prod-console'
import Nprogress from '@/plugins/nprogress'
import Iconify from '@/plugins/iconify'

import 'normalize.css'
import './styles/index.scss'
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ProdConsole)
app.use(Nprogress, router)
app.use(Iconify)

app.mount('#app')

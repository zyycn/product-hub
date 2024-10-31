import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from '@/utils/element-plus-ui'
import ProdConsole from '@/utils/prod-console'
import Nprogress from '@/utils/nprogress'

import 'element-plus/theme-chalk/dark/css-vars.css'

import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(ProdConsole)
app.use(Nprogress, router)

app.mount('#app')

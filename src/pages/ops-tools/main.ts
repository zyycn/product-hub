import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ElementPlus from '@/utils/element-plus-ui'
import ProdConsole from '@/utils/prod-console'
import Nprogress from '@/utils/nprogress'

import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(ProdConsole)
app.use(Nprogress, router)

app.mount('#app')

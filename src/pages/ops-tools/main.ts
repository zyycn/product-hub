import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ElementUI from '@/plugins/element-ui'
import ProdConsole from '@/plugins/prod-console'
import Nprogress from '@/plugins/nprogress'

import 'normalize.css'

const app = createApp(App)

app.use(router)
app.use(ElementUI)
app.use(Nprogress, router)
app.use(ProdConsole)

app.mount('#app')

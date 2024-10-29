import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ElementUI from '@/utils/element-ui'
import ProdConsole from '@/utils/prod-console'
import Nprogress from '@/utils/nprogress'

import 'normalize.css'

const app = createApp(App)

app.use(router)
app.use(ElementUI)
app.use(Nprogress, router)
app.use(ProdConsole)

app.mount('#app')

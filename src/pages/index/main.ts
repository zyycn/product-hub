import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

import ProdConsole from '@/utils/prod-console'

const app = createApp(App)

app.use(ProdConsole)

app.mount('#app')

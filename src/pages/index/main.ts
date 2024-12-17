import { createApp } from 'vue'
import App from './App.vue'

import ProdConsole from '@/plugins/prod-console'
import Iconify from '@/plugins/iconify'

import 'modern-normalize/modern-normalize.css'
import './styles/tailwind/index.css'

const app = createApp(App)

app.use(ProdConsole)
app.use(Iconify)

app.mount('#app')

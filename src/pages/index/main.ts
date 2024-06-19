import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

import clientEnv from '@/plugins/client-env'

const app = createApp(App)

app.use(clientEnv)

app.mount('#app')

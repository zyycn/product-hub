import { createApp } from 'vue'

import App from './App.vue'

import ElementPlus from '@/utils/element-plus-ui'

import 'normalize.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

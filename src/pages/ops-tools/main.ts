import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ElementUI from '@/plugins/element-ui'
import ProdConsole from '@/plugins/prod-console'

import 'normalize.css'

createApp(App).use(router).use(ProdConsole).use(ElementUI).mount('#app')

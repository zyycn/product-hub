import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/message.scss'
import { App } from 'vue'

export default {
  install(app: App, options = {}) {
    app.use(ElementPlus, {
      size: 'large',
      ...options
    })
  }
}

import { Icon } from '@iconify/vue'
import { App } from 'vue'

export default {
  install(app: App) {
    app.component('IconifyIcon', Icon)
  }
}

import { Icon } from '@iconify/vue'

export default {
  install(app: App) {
    app.component('IconifyIcon', Icon)
  }
}

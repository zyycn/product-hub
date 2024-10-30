import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

export default {
  install(app: App, options = {}) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura
      },
      ...options
    })
  }
}

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { App } from 'vue'
import { Router } from 'vue-router'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

NProgress.start()

const nprogressController = (router: Router) => {
  router.beforeEach(async (to, _from, next) => {
    if (to.meta.title) document.title = to.meta.title as string

    NProgress.start()
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

export default {
  install(_app: App, router: Router) {
    nprogressController(router)
  }
}

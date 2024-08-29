import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

NProgress.start()

const nprogressController = (router: Router, title: string) => {
  router.beforeEach(async (to, _from, next) => {
    if (title && to.meta.title) document.title = to.meta.title as string

    NProgress.start()
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

export default {
  install({ router, title } = { router: {} as Router, title: '' }) {
    nprogressController(router, title)
  }
}

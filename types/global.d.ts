import type { Page } from 'vite-plugin-virtual-mpa'

declare global {
  const __APP_PAGES__: Page[]
  const __APP_INFO__: {
    VITE_ENV_NAME: string
    BUILD_TIME: string
    GIT_COMMITHASH: string
    GIT_COMMIT_TIME: string
  }
}

declare module 'nprogress'
declare module 'qs'
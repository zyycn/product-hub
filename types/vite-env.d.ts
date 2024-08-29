/// <reference types="vite/client" />

// 全局变量
declare const __APP_INFO__: {
  VITE_ENV_NAME: string
  BUILD_TIME: string
  GIT_COMMITHASH: string
  GIT_COMMIT_TIME: string
}

// 进度条
declare module 'nprogress'

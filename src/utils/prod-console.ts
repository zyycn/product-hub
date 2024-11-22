export default {
  install() {
    const style_1 = 'background: #35495e; padding: 3px; border-radius: 2px 0 0 2px; color: #fff'
    const style_2 = 'background: #41b883; padding: 3px; border-radius: 0 2px 2px 0; color: #fff'

    console.info(`%c 构建环境 %c ${__APP_INFO__.VITE_ENV_NAME} `, style_1, style_2)
    console.info(`%c 构建时间 %c ${__APP_INFO__.BUILD_TIME} `, style_1, style_2)
    console.info(`%c 构建版本提交哈希 %c ${__APP_INFO__.GIT_COMMITHASH} `, style_1, style_2)
    console.info(`%c 构建版本提交时间 %c ${__APP_INFO__.GIT_COMMIT_TIME} `, style_1, style_2)
  }
}

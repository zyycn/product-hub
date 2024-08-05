import child_process from 'child_process'
import dayjs from 'dayjs'

const GIT_COMMITHASH = child_process.execSync('git rev-parse HEAD').toString().trim()
const GIT_COMMIT_TIME = child_process.execSync('git show -s --format=%ci').toString().trim()

const BUILD_INFO = {
  BUILD_TIME: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  GIT_COMMITHASH: GIT_COMMITHASH,
  GIT_COMMIT_TIME: dayjs(GIT_COMMIT_TIME).format('YYYY-MM-DD HH:mm:ss')
}

export default BUILD_INFO

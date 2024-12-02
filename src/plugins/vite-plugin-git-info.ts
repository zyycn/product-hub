import { execSync } from 'child_process'
import dayjs from 'dayjs'
import { Plugin } from 'vite'

function getGitInfo() {
  const runCommand = (cmd: string) => {
    try {
      return execSync(cmd, { encoding: 'utf-8' }).trim()
    } catch {
      return ''
    }
  }

  const branch = runCommand('git rev-parse --abbrev-ref HEAD')
  const commitId = runCommand('git rev-parse HEAD')
  const commitTime = dayjs(runCommand('git log -1 --format=%cd')).format('YYYY-MM-DD HH:mm:ss')
  const buildTime = dayjs().format('YYYY-MM-DD HH:mm:ss')

  return {
    branch,
    commitId,
    commitTime,
    buildTime
  }
}

export default (): Plugin => {
  return {
    name: 'vite-plugin-git-info',
    enforce: 'pre',
    config(config) {
      const gitInfo = getGitInfo()
      const defineKey = `__GIT_INFO__`

      return {
        define: {
          ...(config.define || {}),
          [defineKey]: JSON.stringify(gitInfo)
        }
      }
    },
    transformIndexHtml(html) {
      // Inject `__GIT_INFO__` into the `window` object
      return html.replace(
        '</body>',
        `<script>
          window.__GIT_INFO__ = typeof __GIT_INFO__ !== 'undefined' ? __GIT_INFO__ : {};
          window.onload = () => {
            const style_1 = 'background: #35495e; padding: 3px; border-radius: 2px 0 0 2px; color: #fff'
            const style_2 = 'background: #41b883; padding: 3px; border-radius: 0 2px 2px 0; color: #fff'

            console.log('%c Branch %c ' + window.__GIT_INFO__.branch + ' ', style_1, style_2);
            console.log('%c Commit ID %c ' + window.__GIT_INFO__.commitId + ' ', style_1, style_2);
            console.log('%c Commit Time %c ' + window.__GIT_INFO__.commitTime + ' ', style_1, style_2);
            console.log('%c Build Time %c ' + window.__GIT_INFO__.buildTime + ' ', style_1, style_2);
          }
        </script></body>`
      )
    }
  }
}

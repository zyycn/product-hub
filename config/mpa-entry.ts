import { Page } from 'vite-plugin-virtual-mpa'

const pages: Page[] = [
  {
    name: 'index',
    entry: '/src/pages/index/main.ts',
    data: { title: '项目路由' }
  },
  {
    name: 'ops-tools',
    entry: '/src/pages/ops-tools/main.ts',
    data: { title: '运维工具' }
  }
]

export default pages

import { Page } from 'vite-plugin-virtual-mpa'

const pages: Page[] = [
  {
    name: 'index',
    entry: '/src/pages/index/main.ts',
    data: { title: '项目地图（开发）', icon: '' }
  },
  {
    name: 'ops-tools',
    entry: '/src/pages/ops-tools/main.ts',
    data: { title: '运维工具', icon: '/src/pages/ops-tools/public/favicon.svg' }
  }
]

export default pages

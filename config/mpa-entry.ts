import { Page } from 'vite-plugin-virtual-mpa'

const pages: Page[] = [
  {
    name: 'index',
    entry: '/src/pages/index/main.ts',
    data: { title: 'PROJECT PAGES', icon: '/src/pages/index/public/favicon.svg', hidden: true }
  },
  {
    name: 'ops-tools',
    entry: '/src/pages/ops-tools/main.ts',
    data: { title: 'OPS Tools', icon: '/src/pages/ops-tools/public/favicon.svg' }
  }
]

export default pages

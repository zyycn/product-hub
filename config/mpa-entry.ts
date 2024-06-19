import { Page } from 'vite-plugin-virtual-mpa'

const pages: Page[] = [
  {
    name: 'index',
    entry: '/src/pages/index/main.ts',
    data: { title: '项目路由' }
  },
  {
    name: 'zzfx',
    entry: '/src/pages/zzfx/main.ts',
    data: { title: '自助分析平台' }
  }
]

export default pages

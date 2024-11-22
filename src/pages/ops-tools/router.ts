import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/pages/ops-tools/layout/index.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: { title: '启动~！' },
    component: () => import('./views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { title: '概览', icon: 'openmoji:home-button' },
        component: () => import('./views/dashboard/index.vue')
      },
      {
        path: '/terminal',
        name: 'Terminal',
        meta: { title: '终端', icon: 'openmoji:code-editor' },
        component: () => import('./views/terminal/index.vue')
      },
      {
        path: '/file-manage',
        name: 'FileManage',
        meta: { title: '文件管理', icon: 'openmoji:open-file-folder' },
        component: () => import('./views/file-manage/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router

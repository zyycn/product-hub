import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/pages/ops-tools/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/workspace',
    children: [
      {
        path: '/workspace',
        name: 'Workspace',
        meta: { title: '工作台', icon: 'carbon-workspace' },
        component: () => import('./views/workspace/index.vue')
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'carbon:dashboard' },
        component: () => import('./views/dashboard/index.vue')
      },
      {
        path: '/nested',
        name: 'Nested',
        meta: { title: '嵌套路由', icon: 'carbon:menu' },
        component: () => import('./views/nested/index.vue'),
        children: [
          {
            path: '/nested/nested-1',
            name: 'Nested-1',
            meta: { title: '嵌套路由-1', icon: 'carbon:menu' },
            component: () => import('./views/nested/nested-1/index.vue')
          },
          {
            path: '/nested/nested-2',
            name: 'Nested-2',
            meta: { title: '嵌套路由-2', icon: 'carbon:menu' },
            component: () => import('./views/nested/nested-2/index.vue'),
            children: [
              {
                path: '/nested/nested-2/nested-2-1',
                name: 'Nested-2-1',
                meta: { title: '嵌套路由-2-1', icon: 'carbon:menu' },
                component: () => import('./views/nested/nested-2/nested-2-1/index.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/pages/ops-tools/layout/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/workspace',
      children: [
        {
          path: '/workspace',
          name: 'Workspace',
          meta: { title: '工作台' },
          component: () => import('./views/workspace/index.vue')
        }
      ]
    }
  ]
})

export default router

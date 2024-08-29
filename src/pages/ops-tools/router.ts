import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lock',
      name: 'Lock',
      meta: { title: '锁屏' },
      component: () => import('./views/lock/index.vue')
    }
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/dashbord',
    //   children: [
    //     {
    //       path: '/dashbord',
    //       name: 'Dashbord',
    //       meta: { title: '运维工具面板' },
    //       component: () => import('./views/dashbord')
    //     },
    //     {
    //       path: '/module-nav',
    //       name: 'ModuleNav',
    //       meta: { title: '模块导航' },
    //       component: () => import('./views/module-nav')
    //     },
    //     {
    //       path: '/sql-export',
    //       name: 'SqlExport',
    //       meta: { title: '导出数据库表' },
    //       component: () => import('./views/sql-export')
    //     },
    //     {
    //       path: '/pwd-operation',
    //       name: 'PwdOperation',
    //       meta: { title: '密码操作' },
    //       component: () => import('./views/pwd-operation')
    //     },
    //     {
    //       path: '/userinfo-opt',
    //       name: 'UserinfoOpt',
    //       meta: { title: '用户信息操作' },
    //       component: () => import('./views/userinfo-opt')
    //     },
    //     {
    //       path: '/redis-opt',
    //       name: 'RedisOpt',
    //       meta: { title: 'Redis操作' },
    //       component: () => import('./views/redis-opt')
    //     },
    //     {
    //       path: 'file-manage',
    //       name: 'FileManage',
    //       meta: { title: '文件管理' },
    //       component: () => import('./views/file-manage')
    //     },
    //     {
    //       path: 'terminal',
    //       name: 'Terminal',
    //       meta: { title: '终端输出' },
    //       component: () => import('./views/terminal')
    //     }
    //   ]
    // }
  ]
})

export default router

// import Vue from 'vue'
// import Router from 'vue-router'
// import Layout from '@/pages/ops-tools/layout/index.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/lock',
//       name: 'Lock',
//       meta: { title: '锁屏' },
//       component: () => import('./views/lock')
//     },
//     {
//       path: '/',
//       component: Layout,
//       redirect: '/dashbord',
//       children: [
//         {
//           path: '/dashbord',
//           name: 'Dashbord',
//           meta: { title: '运维工具面板' },
//           component: () => import('./views/dashbord')
//         },
//         {
//           path: '/module-nav',
//           name: 'ModuleNav',
//           meta: { title: '模块导航' },
//           component: () => import('./views/module-nav')
//         },
//         {
//           path: '/sql-export',
//           name: 'SqlExport',
//           meta: { title: '导出数据库表' },
//           component: () => import('./views/sql-export')
//         },
//         {
//           path: '/pwd-operation',
//           name: 'PwdOperation',
//           meta: { title: '密码操作' },
//           component: () => import('./views/pwd-operation')
//         },
//         {
//           path: '/userinfo-opt',
//           name: 'UserinfoOpt',
//           meta: { title: '用户信息操作' },
//           component: () => import('./views/userinfo-opt')
//         },
//         {
//           path: '/redis-opt',
//           name: 'RedisOpt',
//           meta: { title: 'Redis操作' },
//           component: () => import('./views/redis-opt')
//         },
//         {
//           path: 'file-manage',
//           name: 'FileManage',
//           meta: { title: '文件管理' },
//           component: () => import('./views/file-manage')
//         },
//         {
//           path: 'terminal',
//           name: 'Terminal',
//           meta: { title: '终端输出' },
//           component: () => import('./views/terminal')
//         }
//       ]
//     }
//   ]
// })

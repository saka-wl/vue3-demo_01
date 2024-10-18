import { createRouter, createWebHistory } from 'vue-router'
import NotUseDynamicComp from '../views/NotUseDynamicComp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/api/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/api/defineAsyncComponent',
      name: 'defineAsyncComponent',
      component: () => import('../views/DefineAsyncComponentComp.vue')
    },
    {
      path: '/api/teleport',
      name: 'teleport',
      component: () => import('../views/TeleportComp.vue')
    },
    {
      path: '/api/notUseDynamicComp',
      name: 'notUseDynamicComp',
      component: NotUseDynamicComp
    }
  ]
})

export default router

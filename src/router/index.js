import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/rates/:id',
      name: 'rates',
      component: () => import('@/views/RateView.vue'),
    }, 
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/views/PaymentView.vue'),
    },
    {
      path: '/frequencies',
      name: 'frequencies',
      component: () => import('@/views/FrequenciesView.vue'),
    },
    {
      path: '/callTheMaster',
      name: 'call-the-master',
      component: () => import('@/views/CallTheMasterView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundPage.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
  return { top: 0 }; 
  // или return { top: 0 }; для Vue Router 4
}
})

export default router

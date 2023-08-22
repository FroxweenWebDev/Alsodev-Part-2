import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Resto',
		component: () => import('../views/RestoView.vue')
  },
  {
    path: '/product/:partnerName',
    name: 'product',
    component: () => import('../views/ProductsView.vue')
  },{
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

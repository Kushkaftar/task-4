import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/offers',
    name: 'AllOffers',
    component: () => import('../views/AllOffers.vue'),
  },
  {
    path: '/offer/:id',
    name: 'Offer',
    component: () => import('../views/Offer.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/Home')
    }
    ,{
      path: '/city',
      name: 'city',
      component: () => import('./views/city/City.vue')
    },
    {
      path:'/detail/:id',
      name:'detail',
      component: () => import('./views/detail/Detail.vue') 
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

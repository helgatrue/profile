import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '@/components/Page.vue'
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
]

const router = new VueRouter({
  routes
})

export default router

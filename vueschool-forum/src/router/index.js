import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'
import Forum from '@/pages/PageForum'
import Category from '@/pages/PageCategory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: ThreadShow,
      props: true
    },

    {
      path: '*',
      name: 'NotFound',
      component: PageNotFound
    },

    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },

    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    }
  ],

  mode: 'history'
})

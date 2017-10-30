import Vue from 'vue'
import Router from 'vue-router'
import Documents from '@/pages/Documents'
import DocumentView from '@/pages/DocumentView'
import About from '@/pages/About'
import ErrorPage from '@/pages/ErrorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'documents',
      component: Documents
    },
    {
      path: '/documents',
      redirect: '/'
    },
    {
      path: '/document/:id',
      name: 'document',
      component: DocumentView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      component: ErrorPage
    }
  ]
})

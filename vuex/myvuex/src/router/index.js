import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Errorpage from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Params',
      component: Params,
      // beforeEnter: (to, from, next) => {
      //   console.log(to)
      //   console.log(from)
      //   next({
      //     path:'/Hi1'
      //   })
      // }
    },
    {
      path: '/gohome',
      redirect: '/'
    },
    {
      path: '/goParams/:id',
      redirect: '/Params/:id'
    },
    {
      path: '/Hi1',
      component: Hi1,
      alias: '/hi1_1'
    },
    {
      path: '*',
      component: Errorpage
    }
  ]
})

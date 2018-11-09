import Vue from 'vue'
import Router from 'vue-router'
//@符号表示src目录
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'


Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})

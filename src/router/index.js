import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = resolve => require.ensure([],() => resolve(require('../view/index')),'index')

const home = resolve => require.ensure([],() => resolve(require('../view/home/index')),'home')
const aboutUs = resolve => require.ensure([],() => resolve(require('../view/aboutUs/index')),'aboutUs')
const service = resolve => require.ensure([],() => resolve(require('../view/service/index')),'service')
const products = resolve => require.ensure([],() => resolve(require('../view/products/index')),'products')
const solution = resolve => require.ensure([],() => resolve(require('../view/solution/index')),'solution')

export default new Router({
  // mode:'history',//去掉路由的#
  routes: [
    {
      path:'/home',
      component:home,
    },
    {
      path: '/',
      redirect:'/home',
      component: index,
      children:[
        {
          path:'/aboutUs',
          component:aboutUs,
        },
        {
          path:'/service',
          component:service,
        },
        {
          path:'/products',
          component:products,
        },
        {
          path:'/solution',
          component:solution,
        }
      ]
    }
  ],
  // 移动端路由跳转时回到顶部位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import app from '../App.vue'
Vue.use(Router)
export default new Router({
  routes: [
    /*     {
          redirect:'/',
          component:app
        }, */              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: '/',     //路由名称，
      component: hello,   //对应的组件模板
      children: [{                    //每一个链接都是一个对象
        path: '/test',         //链接路径
        name: '/test',     //路由名称，
        component: resolve => require(['@/components/test'], resolve),
      },]
    },
    {                    //每一个链接都是一个对象
      path: '/test1',         //链接路径
      name: '/test1',     //路由名称，
      component: resolve => require(['@/components/test'], resolve),
    },

  ]
})
/* console.log("I'm router") */
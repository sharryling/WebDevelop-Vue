import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
Vue.use(Router)
var route = new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/hello',         //链接路径
      name: '/hello',     //路由名称，
      component: hello,   //对应的组件模板
      children: [{                    //每一个链接都是一个对象
        path: '/test',         //链接路径
        name: 'test',     //路由名称，
        component: resolve => require(['@/components/test'], resolve),
        /* beforeEnter:(to,from,next)=>{
          console.log("route:",to,from);
        } */
      }]
    },
    {                    //每一个链接都是一个对象
      path: '/test1',         //链接路径
      name: '/test1',     //路由名称，
      components: {
        'default':resolve => require(['@/components/test1'], resolve),
        /* 'left':resolve => require(['@/components/left'], resolve),
        'main':resolve => require(['@/components/main'], resolve),
        'header':resolve => require(['@/components/header'], resolve), */
      }
    },
  ],
})
route.beforeEach((to, from, next) => {
  console.log("hahahah")
  next();
})
export default route
/* console.log("I'm router") */
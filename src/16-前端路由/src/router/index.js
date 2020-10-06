import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    // component: Home,
    redirect: '/home'
  },
  {
    path: '/home',
    // component: () => import('../components/Home'),
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',  // 子路由无需加 /
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    // beforeEnter: (to, from, next) => {
    //   console.log("About 前置钩子启动！");
    //   next()
    // }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 前置钩子
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title
//   console.log("前置钩子启动！");
//   next()
// })

// router.afterEach((to, from) => {
//   console.log("后置钩子启动！");
// })

export default router;
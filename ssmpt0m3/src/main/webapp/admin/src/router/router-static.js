import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import tiwenhuida from '@/views/modules/tiwenhuida/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import tiwenxinxi from '@/views/modules/tiwenxinxi/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import zuoyetijiao from '@/views/modules/zuoyetijiao/list'
    import discusskechengshipin from '@/views/modules/discusskechengshipin/list'
    import kechengshipin from '@/views/modules/kechengshipin/list'
    import storeup from '@/views/modules/storeup/list'
    import config from '@/views/modules/config/list'
    import kechengleixing from '@/views/modules/kechengleixing/list'
    import discusszuoyexinxi from '@/views/modules/discusszuoyexinxi/list'
    import zuoyexinxi from '@/views/modules/zuoyexinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/tiwenhuida',
        name: '提问回答',
        component: tiwenhuida
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/tiwenxinxi',
        name: '提问信息',
        component: tiwenxinxi
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/zuoyetijiao',
        name: '作业提交',
        component: zuoyetijiao
      }
      ,{
	path: '/discusskechengshipin',
        name: '课程视频评论',
        component: discusskechengshipin
      }
      ,{
	path: '/kechengshipin',
        name: '课程视频',
        component: kechengshipin
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/kechengleixing',
        name: '课程类型',
        component: kechengleixing
      }
      ,{
	path: '/discusszuoyexinxi',
        name: '作业信息评论',
        component: discusszuoyexinxi
      }
      ,{
	path: '/zuoyexinxi',
        name: '作业信息',
        component: zuoyexinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

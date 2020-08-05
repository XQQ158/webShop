import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
      path:"/",
      redirect:"/home",
    },
    {
      path:"/home",
      name:"首页",
      component:()=>import("../views/Home.vue")
    },
    {
      path:"/lists",
      name:"列表页",
      component:()=>import("../views/Lists.vue")
    },
    {
      path:"/details",
      name:"详情页",
      component:()=>import("../views/Details.vue")
    },
    {
      path: "/shoppingCart",
      name: "购物车",
      component: () => import("../views/ShoppingCart.vue"),
      meta: {
        requireAuth: true // 需要验证登录状态
      }
    },
    {
      path: "/collect",
      name: "收藏页",
      component: () => import("../views/Collect.vue"),
      meta: {
        requireAuth: true // 需要验证登录状态
      }
    },
    {
      path: "/confirmOrder",
      name: "确认订单",
      component: () => import("../views/ConfirmOrder.vue"),
      meta: {
        requireAuth: true // 需要验证登录状态
      }
    },
    {
      path: "/order",
      name: "订单页",
      component: () => import("../views/Order.vue"),
      meta: {
        requireAuth: true // 需要验证登录状态
      }
    }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})




export default router

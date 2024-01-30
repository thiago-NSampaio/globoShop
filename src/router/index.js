import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import User from '../views/User/User.vue'
import UserProducts from '../views/User/UserProducts.vue'
import UserSales from '../views/User/UserSales.vue'
import UserShopping from '../views/User/UserShopping.vue'
import UserEdit from '../views/User/UserEdit.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/user",
    component: User,
    children: [
      {
        path: "",
        name: "user",
        component: UserProducts
      },
      {
        path: "shopping",
        name: "shopping",
        component: UserShopping
      },      {
        path: "sales",
        name: "sales",
        component: UserSales
      },      {
        path: "edit",
        name: "edit",
        component: UserEdit
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({top:0, behavior:"smooth"})
  }
})

export default router

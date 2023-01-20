import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduct from "@/views/Product/AddProduct.vue"
import Product from "@/views/Product/Product.vue";
import AddCategory from "@/views/Category/AddCategory.vue";
import EditCategory from "@/views/Category/EditCategory.vue";
import Category from "@/views/Category/Category.vue";
import EditProduct from "@/views/Product/EditProduct.vue";
import Admin from "@/views/Admin.vue";
import ShowDetails from "@/views/Product/ShowDetails.vue";
import ListProducts from "@/views/Category/ListProducts.vue";
import Signup from "@/views/Signup.vue";
import Signin from "@/views/Signin.vue";
import WishList from "@/views/Product/WishList.vue";
import Cart from "@/views/Cart.vue";
import Success from "@/views/Payment/Success.vue";
import Failed from "@/views/Payment/Failed.vue";
import Checkout from "@/views/Checkout/Checkout.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/product/list',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/category/edit/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/category/list',
    name: 'Category',
    component: Category
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/product/show/:id',
    name: 'ProductShow',
    component: ShowDetails
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: Success
  },
  {
    path: '/payment/failed',
    name: 'PaymentFailed',
    component: Failed
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

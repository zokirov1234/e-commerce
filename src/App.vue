<template>
  <Navbar :cart-count="cartCount" @resetCartCount="resetCartCount"/>
  <router-view v-if="categories && products" style="min-height: 60vh"
               :baseURL="baseURL"
               :categories="categories"
               :products="products"
               @fetchData="fetchData"
  >
  </router-view>
  <Footer v-if="!['Signup', 'Signin'].includes($route.name)"/>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import axios from 'axios';


export default {
  components: {Footer, Navbar},
  data() {
    return {
      baseURL: "http://localhost:8081/",
      products: null,
      categories: null,
      cartCount : 0
    }
  },
  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios.get(this.baseURL + "category/get")
          .then(res => {
            this.categories = res.data
          }).catch((err) => console.log('err', err));
      // api call to get the products
      await axios.get(this.baseURL + "product/list")
          .then(res => {
            this.products = res.data
            console.log(this.products)
          }).catch((err) => console.log('err', err));
      if (this.token) {
        axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
            (response) => {
              if (response.status == 200) {
                const result = response.data;
                this.cartCount = result.cartItems.length;
              }
            },
            (error) => {
              console.log(error);
            }
        );
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    }
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
Navbar
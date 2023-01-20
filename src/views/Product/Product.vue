<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Products</h3>
        <router-link :to="{ name: 'AddProduct' }">
          <button class="btn" style="float:right">Add Product</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
          v-for="product of products"
          :key="product.id"
          class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <ProductBox :product="product"> </ProductBox>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
import ProductBox from "../../components/Product/ProductBox.vue";
export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  components: { ProductBox },
  data() {
    return {
      baseURL: "http://localhost:8081",
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await axios
          .get(`${this.baseURL}/product/list`)
          .then((res) => (this.products = res.data))
          .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style scoped></style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Product</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form enctype="multipart/form-data" >
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" required/>
          </div>
          <div class="form-group">
            <label>Category</label>
            <select class="form-control" v-model="categoryId"  required>
              <option v-for="category in categories"
                      :key="category.id"
                      :value="category.id">{{ category.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="description" required />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" class="form-control" v-model="price" required />
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input type="text" class="form-control"  v-model="imageUrl" required />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import sweet from "sweetalert2";

const axios = require("axios")
export default {
  data() {
    return {
      name: null,
      price: null,
      description: null,
      categoryId: null,
      imageUrl: null
    };
  },
  props : ["categories"],
  methods: {
    addCategory: function () {
      console.log(this.name, this.categoryId, this.description, this.price, this.imageUrl);
      const newProduct =  {
        name : this.name,
        price : this.price,
        description : this.description,
        categoryId : this.categoryId,
        imageUrl : this.imageUrl
      }

      const baseURL = "http://localhost:8081";
          axios({
            method: "post",
            url: `${baseURL}/product/public/add`,
            data: JSON.stringify(newProduct),
            headers : {'Content-Type' : 'application/json'},
          }).then(() => {
            this.$router.push({name: 'Product'})
            sweet.fire({
                      text: "Product add successfully",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500
                    });
          }).catch(() => {
            sweet.fire({
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500
            });
          });

    },
  },
  // mounted() {
  //   this.id = this.$route.params.id;
  //   this.product = this.products.find(product => product.id == this.id);
  // }
};
</script>
<style scoped></style>

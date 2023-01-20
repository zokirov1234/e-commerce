<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Product</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="product">
          <div class="form-group">
            <label>Category</label>
            <select class="form-control" v-model="product.categoryId" required>
              <option v-for="category of categories"
                      :key="category.id"
                      :value="category.id">{{ category.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="product.name" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="product.description" required>
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input type="text" class="form-control" v-model="product.imageUrl" required>
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" class="form-control" v-model="product.price" required>
          </div>

          <button type="button" class="btn btn-primary" @click="editProduct">Edit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const axios =  require('axios')
export default {
  data() {
    return {
      product: null,
      id: null
    }
  },
  props: ["baseURL", "categories", "products"],
  methods : {
    async editProduct() {

      await axios({
        method: 'post',
        url: this.baseURL+"product/admin/edit/" + this.id,
        data : this.product,
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then(() => {
            this.$emit("fetchData");
            this.$router.push({name: 'Product'})
            Swal.fire({
              text: "Product updated successfully",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500
            })
          });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(product => product.id == this.id);
  }
}
</script>

<style scoped>

</style>
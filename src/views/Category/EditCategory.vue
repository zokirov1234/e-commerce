<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control" v-model="name" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="description" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editCategory">Edit</button>
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
  data(){
    return {
      name : "",
      description : ""
    }
  },
  props : ["baseURL", "categories"],
  methods : {
  async editCategory() {
    const updatedCategory = {
      name : this.name,
      description : this.description,
    }
        await axios({
          method: 'post',
          url: this.baseURL+"category/admin/edit/" + this.id,
          data : JSON.stringify(updatedCategory),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(() => {
          this.$emit("fetchData");
          this.$router.push({name: 'Category'})
          Swal.fire({
            text: "Category updated successfully",
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
    this.category = this.categories.find(category => category.id == this.id);
    this.name = this.category.name;
    this.description = this.category.description;
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>
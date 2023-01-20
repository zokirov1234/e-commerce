<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="description" />
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
import Swal from "sweetalert2";
const axios = require("axios");
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    addCategory() {
      console.log(this.name, this.description);
      const newCategory = {
        name: this.name,
        description: this.description,
      };
      const baseURL = "http://localhost:8081";
      axios({
        method: "post",
        url: `${baseURL}/category/admin/add`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
          .then(() => {
            this.name = "";
            this.description = "";
            Swal.fire({
              text: "Category add successfully",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch((err) => {
            this.name = "";
            this.description = "";
            console.log(err);
            Swal.fire({
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500
            })
          });
    },
  },
};
</script>
<style scoped></style>
<template>
  <div class="container mx-auto px-6">
    <h3 class="text-gray text-2xl font-medium"></h3>
    <div
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
    >
      <Product
        :product="product"
        v-for="(product, index) in products"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Product,
  },

  setup() {
    const products = ref([]);
    function getProdcuts() {
      axios
        .get("/api/products")
        .then((response) => {
          products.value = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return {
      products,
      getProdcuts,
    };
  },
  mounted() {
    this.getProdcuts();
  },
};
</script>

<template>
  <tr
    class="h-24 md:h24 sm:24 border-b border-solid border-gray-400 text-center font-medium"
  >
    <td class="flex">
      <div>
        <img
          class="m-auto mt-2 mb-2 rounded w-32"
          :src="product.image_ulr"
          width="100"
          height="100"
        />
      </div>
      <div class="m-auto">
        <p>{{ product.title }}</p>
      </div>
    </td>
    <td>{{ product.price }}</td>
    <td>
      <input
        @input="Total()"
        class="border rounded text-center border-gray-400"
        v-model="product.qty"
        type="number"
        max="10"
        min="1"
      />
    </td>
    <td>{{ subTotal }} $</td>
    <td>
      <svg
        @click="removeProduct(product)"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 m-auto cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="red"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </td>
  </tr>
</template>

<script>
import { ref, computed } from "vue";
import store from "@/store/index.js";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const subTotal = computed(() => {
      return props.product.price * props.product.qty;
    });

    function removeProduct(product) {
      store.commit("removeProduct", product);
      Total();
    }
    function Total() {
      store.commit("calcSubTotal");
      store.commit("calcGrandTotal");
      store.commit("storeProduct");
    }
    return {
      subTotal,
      removeProduct,
      Total,
    };
  },
};
</script>

<style></style>

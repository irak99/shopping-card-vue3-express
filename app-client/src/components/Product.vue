<template>
  <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div
      :style="{ 'background-image': `url(${product.image_ulr})` }"
      class="flex items-end justify-end h-56 w-full bg-cover"
    >
      <button
        class="p-2 rounded-full text-white mx-5 -mb-4 focus:outline-none"
        @click="addToCart(product)"
        :class="
          isAdded
            ? 'bg-red-600 hover:bg-red-500 focus:bg-red-500'
            : 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600'
        "
      >
        <svg
          v-if="!isAdded"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
          />
        </svg>
      </button>
    </div>
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase font-medium">{{ product.title }}</h3>
      <span class="text-gray-600 mt-2 font-medium">{{ product.price }} $</span>
    </div>
  </div>
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
    const isAdded = ref(false);
    const cart = computed(() => {
      return store.state.cart;
    });
    function addToCart(product) {
      isAdded.value = !isAdded.value;
      if (isAdded.value) {
        store.commit("addToCart", product);
        store.commit("storeProduct");
      } else {
        store.commit("removeProduct", product);
        store.commit("storeProduct");
      }
    }

    function chechAdded() {
      var product = props.product.id;
      var check = cart.value.some((el) => {
        return el.id == product;
      });
      if (check) {
        isAdded.value = true;
      }
    }

    return {
      cart,
      addToCart,
      isAdded,
      chechAdded,
    };
  },
  mounted() {
    this.chechAdded();
  },
};
</script>

<style></style>

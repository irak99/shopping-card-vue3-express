<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center justify-shtrink-0 text-white mr-6">
      <router-link :to="{ name: 'Home' }" class="flex items-center">
        <svg
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span class="font-semibold text-xl trecking-tight">Shopping cart</span>
      </router-link>
    </div>
    <div class="flex items-center w-auto">
      <div>
        <router-link
          :to="{ name: 'Cart' }"
          class="flex text-sm px-4 py-2 leading-none rounded text-white hover:boreder-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          <svg
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
          <span class="text-lg font-medium">({{ cart.length }})</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
import store from "@/store/index.js";
export default {
  setup() {
    const cart = computed(() => {
      return store.state.cart;
    });
    return {
      cart,
    };
  },
  mounted() {
    store.commit("getLocalStorage");
  },
};
</script>

<style></style>

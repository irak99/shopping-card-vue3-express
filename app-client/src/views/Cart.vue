<template>
  <div class="container flex flex-col m-auto">
    <p class="text-3xl md:text-5xl font-medium">Cart /</p>
    <div class="flex w-full flex-col m-auto" v-if="cart.length >= 1">
      <div class="flex w-full flex-col md:flex-row">
        <div class="flex md:w-3/5 mt-4 w-full">
          <table class="table-auto w-11/12 m-auto">
            <thead>
              <tr class="h-12 border-b border-solid border-gray-400">
                <th>Prodct</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <ProductCart
                :product="product"
                v-for="(product, index) in cart"
                :key="index"
              />
            </tbody>
          </table>
        </div>
        <div class="sm:w-7/12 md:w-2/5 mt-4 w-full m-auto">
          <div class="w-11/12 m-auto border rounded border-gray-400 shadow-md">
            <table class="mt-4 mb-4">
              <tr class="text-center text-2xl">
                <td class="w-56">Subtotal</td>
                <td class="w-56">{{ subTotal }} $</td>
              </tr>
              <tr class="h-20 text-center text-3xl">
                <td>Tax</td>
                <td>{{ Tax }}</td>
              </tr>
              <tr class="text-center text-2xl">
                <td><strong>Total</strong></td>
                <td>
                  <strong
                    >{{ Number.parseFloat(grandTotal).toFixed(2) }} $</strong
                  >
                </td>
              </tr>
            </table>

            <div class="w-5/6 m-auto mt-4 mb-4">
              <a href="#">
                <button
                  class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white focus:outline-none focus:shadow-outline hover:bg-gray-700 shadow item-center rounded-full bg-gray-800 uppercase"
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span class="ml-2 mt-5pxs">Proceed to checkout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cart.length <= 0" class="flex w-full mt-20">
      <h1 class="m-auto text-6xl">The cart is empty</h1>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { ref, computed } from "vue";
import store from "@/store/index.js";
import ProductCart from "@/components/ProductCart";
export default {
  name: "Cart",
  components: {
    ProductCart,
  },
  setup() {
    const cart = computed(() => {
      return store.state.cart;
    });
    const subTotal = computed(() => {
      return store.state.subTotal;
    });
    const Tax = computed(() => {
      return store.state.tax;
    });
    const grandTotal = computed(() => {
      return store.state.grandTotal;
    });
    return {
      cart,
      subTotal,
      Tax,
      grandTotal,
    };
  },
  mounted() {
    store.commit("calcSubTotal");
    store.commit("calcGrandTotal");
  },
};
</script>

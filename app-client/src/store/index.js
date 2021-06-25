import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.unshift(payload);
    },
    removeProduct(state, payload) {
      const index = state.cart.indexOf(payload);
      state.cart.splice(index, 1);
    },
    storeProduct(state) {
      const parsed = JSON.stringify(state.cart);
      localStorage.setItem("cart", parsed);
    },
    getLocalStorage(state) {
      if (localStorage.getItem("cart")) {
        try {
          state.cart = JSON.parse(localStorage.getItem("cart"));
        } catch (error) {
          localStorage.removeItem("cart");
        }
      }
    },
  },
  actions: {},
  modules: {},
});

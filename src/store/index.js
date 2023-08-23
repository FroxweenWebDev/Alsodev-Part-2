import { createStore } from 'vuex';

const CART_STORAGE_KEY = 'cartItems';

export default createStore({
  state: {
    cartItems: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || []
  },
  mutations: {
    addToCart(state, product) {
      const existingItem = state.cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);

      // Clear localStorage if cart is empty
      if (state.cartItems.length === 0) {
        localStorage.removeItem(CART_STORAGE_KEY);
      } else {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    },
    increaseQuantity(state, index) {
      state.cartItems[index].quantity++;
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    decreaseQuantity(state, index) {
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity--;
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    }
  },
  actions: {},
  modules: {}
});

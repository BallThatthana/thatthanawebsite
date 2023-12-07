const CartModule = {
    state() {
      return {
        cart: [],
        showCart: false,
      };
    },
    getters: {
      cartItems: (state) => state.cart,
      showCart : state => state.showCart
    },
    mutations: {
      clearCart(state, payload){
        state.cartItem = payload
      },
      display_cart(state, payload){
        state.showCart = payload
      },
      setCart(state, item) {
          const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
          if (existingItem) {
              if (!existingItem.quantity) {
                existingItem.quantity = 1;
              } else {
                existingItem.quantity++; // If the item already exists in the cart, increment its quantity.
              }
          } else {
              item.quantity = 1; // If it's a new item, set the quantity to 1.
              state.cart.push(item);
          }
      },
      setProducts(state, item){
        state.cart = item
      },
      remove_Item(state, item) {
        const itemsToRemove = state.cart.filter((cartItem) => cartItem.id === item.id);
  
        // Loop through the items to be removed and splice them
        itemsToRemove.forEach((itemToRemove) => {
          const index = state.cart.indexOf(itemToRemove);
          state.cart.splice(index, 1);
        });
      },
      decreaseQTY(state, itemId) {
        const item = state.cart.find((item) => item.id === itemId.id);
        if (item && item.quantity > 1) {
          item.quantity--;
        }
      },
      increaseQTY(state, itemId) {
        const item = state.cart.find((item) => item.id === itemId.id);
        if (item) {
          item.quantity++;
        }
      },
    },
    actions: {
      addCart({ commit }, item) {
        commit('setCart', item);
      },
      removeCart({ commit }, item) {
        commit('remove_Item', item);
      },
      decreaseCartItem({ commit }, itemId) {
        commit('decreaseQTY', itemId);
      },
      increaseCartItem({ commit }, itemId) {
        commit('increaseQTY', itemId);
      },
    },
  };
  
  export default CartModule;
  
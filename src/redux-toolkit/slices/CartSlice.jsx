import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(product => product.id === item.id);
      if (productItem) {
        productItem.quantity += item.quantity;
      } else {
        state.cartItems = [item, ...state.cartItems];
      }
      return state;
    },
    increment(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(product => product.id === item.id);
      if (productItem) {
        productItem.quantity += 1;
        productItem.totalPrice = productItem.quantity * productItem.price;
      }
      return state;
    },
    decrement(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(product => product.id === item.id);
      if (productItem) {
        productItem.quantity -= 1;
        productItem.totalPrice = productItem.quantity * productItem.price;
        if (productItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            product => product.id !== item.id,
          );
        }
      }
      return state;
    },
    removeFromCart(state, action) {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        product => product.id !== item.id,
      );
      return state;
    },
  },
});

export const {addToCart, increment, decrement, removeFromCart} =
  cartSlice.actions;

export default cartSlice.reducer;

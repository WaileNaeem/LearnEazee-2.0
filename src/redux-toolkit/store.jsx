import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/CartSlice';
import licenseReducer from './slices/LicensceSeatsSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    license: licenseReducer,
  },
});

export default store;

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/CartSlice';
import licenseReducer from './slices/LicensceSeatsSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  cart: cartSlice,
  license: licenseReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

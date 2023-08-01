import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/CartSlice';
import licenseReducer from './slices/LicensceSeatsSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import AuthenticationSlice from './slices/AuthenticationSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  cart: cartSlice,
  license: licenseReducer,
  authentication: AuthenticationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

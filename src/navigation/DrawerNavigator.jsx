import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Navigation} from './NavigationConstants';
import BottomTabsNavigator from './BottomTabsNavigator';
import Sidebar from '../components/sidebar/Sidebar';
import AddToCart from '../screens/add-to-cart-screen/AddToCart';
import MyCart from '../screens/my-cart-screen/MyCart';
import CheckoutScreen from '../screens/checkout-screen/CheckoutScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.CHECKOUT}
      drawerContent={() => <Sidebar />}>
      <Drawer.Screen name={Navigation.TAB} component={BottomTabsNavigator} />
      <Drawer.Screen name={Navigation.CHECKOUT} component={CheckoutScreen} />
      <Drawer.Screen name={Navigation.MY_CART} component={MyCart} />
      <Drawer.Screen name={Navigation.ADD_TO_CART} component={AddToCart} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Navigation} from './NavigationConstants';
import BottomTabsNavigator from './BottomTabsNavigator';
import Sidebar from '../components/sidebar/Sidebar';
import MyCart from '../screens/my-cart-screen/MyCart';
import CheckoutScreen from '../screens/checkout-screen/CheckoutScreen';
import CartScreen from '../screens/cart-screen/CartScreen';
import OrderPlaced from '../screens/order-placed-screen/OrderPlaced';
import PaymentMethodScreen from '../screens/payment-method-screen/PaymentMethodScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerStyle: {width: '85%'}}}
      initialRouteName={Navigation.CHECKOUT}
      drawerContent={() => <Sidebar />}>
      <Drawer.Screen name={Navigation.TAB} component={BottomTabsNavigator} />
      <Drawer.Screen name={Navigation.CHECKOUT} component={CheckoutScreen} />
      <Drawer.Screen name={Navigation.MY_CART} component={MyCart} />
      <Drawer.Screen name={Navigation.CART} component={CartScreen} />
      <Drawer.Screen name={Navigation.ORDER_PLACED} component={OrderPlaced} />
      <Drawer.Screen
        name={Navigation.PAYMENT}
        component={PaymentMethodScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

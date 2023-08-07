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
import AddToCart from '../screens/add-to-cart-screen/AddToCart';
import CongratulationScreen from '../screens/congratulation-screen/CongratulationScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerStyle: {width: '85%'}}}
      initialRouteName={Navigation.TAB}
      drawerContent={() => <Sidebar />}>
      <Drawer.Screen name={Navigation.TAB} component={BottomTabsNavigator} />
      <Drawer.Screen name={Navigation.ADD_TO_CART} component={AddToCart} />
      <Drawer.Screen name={Navigation.CART} component={CartScreen} />
      <Drawer.Screen name={Navigation.CHECKOUT} component={CheckoutScreen} />
      <Drawer.Screen name={Navigation.MY_CART} component={MyCart} />
      <Drawer.Screen
        name={Navigation.PAYMENT}
        component={PaymentMethodScreen}
      />
      <Drawer.Screen name={Navigation.ORDER_PLACED} component={OrderPlaced} />
      <Drawer.Screen
        name={Navigation.CONGRATULATIONS}
        component={CongratulationScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

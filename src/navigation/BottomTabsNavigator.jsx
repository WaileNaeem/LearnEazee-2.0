import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigation} from './NavigationConstants';
import Dashboard from '../screens/dashboard-screen/Dashboard';
import AllCategories from '../screens/all-categories-screen/AllCategories';
import ReaderDashboard from '../screens/reader-dashboard-screen.jsx/ReaderDashboard';
import {COLORS} from '../../utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../../utils/images-path';
import ExampleCart from '../screens/example-cart-screen/ExampleCart';

const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Navigation.READER_DASHBOARD}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.pink3,
        tabBarInactiveTintColor: COLORS.pink4,
      }}>
      <Tab.Screen
        name={Navigation.DASHBOARD}
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({size, color}) => (
            <FeatherIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Navigation.ALL_CATEGORIES}
        component={AllCategories}
        options={{
          tabBarLabel: 'Marketplace',
          tabBarIcon: ({size, focused}) => (
            <>
              {focused && (
                <Image
                  source={IMAGES.marketplaceLogoActive}
                  style={{height: size, width: size}}
                />
              )}
              {!focused && (
                <Image
                  source={IMAGES.marketplaceLogoInactive}
                  style={{height: size, width: size}}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={Navigation.READER_DASHBOARD}
        component={ReaderDashboard}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({size, focused}) => (
            <>
              {focused && (
                <Image
                  source={IMAGES.libraryIconActive}
                  style={{height: size, width: size}}
                />
              )}
              {!focused && (
                <Image
                  source={IMAGES.libraryIconInactive}
                  style={{height: size, width: size}}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={Navigation.EXAMPLE_CART}
        component={ExampleCart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({size, color}) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

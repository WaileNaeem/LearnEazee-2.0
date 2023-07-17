import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Navigation} from './NavigationConstants';
import BottomTabsNavigator from './BottomTabsNavigator';
import Sidebar from '../components/sidebar/Sidebar';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={() => <Sidebar />}>
      <Drawer.Screen name={Navigation.TAB} component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

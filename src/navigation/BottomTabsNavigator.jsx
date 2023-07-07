import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigation} from './NavigationConstants';
import Dashboard from '../screens/dashboard-screen/Dashboard';

const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={Navigation.DASHBOARD}>
      <Tab.Screen name={Navigation.DASHBOARD} component={Dashboard} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Navigation} from './NavigationConstants';
import SplashScreen from '../screens/splash-screen/SplashScreen';
import SplashOne from '../screens/splash-one-screen/SplashOne';
import DrawerNavigator from './DrawerNavigator';
import SignupScreen from '../screens/signup-screen/SignupScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.SPLASH}>
      <Stack.Screen name={Navigation.DRAWER} component={DrawerNavigator} />
      <Stack.Screen name={Navigation.SPLASH} component={SplashScreen} />
      <Stack.Screen name={Navigation.SPLASH_ONE} component={SplashOne} />
      <Stack.Screen name={Navigation.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

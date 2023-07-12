import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Navigation} from './NavigationConstants';
import SplashScreen from '../screens/splash-screen/SplashScreen';
import SplashOne from '../screens/splash-one-screen/SplashOne';
import DrawerNavigator from './DrawerNavigator';
import SignupScreen from '../screens/signup-screen/SignupScreen';
import LoginScreen from '../screens/login-screen/LoginScreen';
import PrivacyPolicyScreen from '../screens/privacy-policy-screen/PrivacyPolicyScreen';
import Sidebar from '../components/sidebar/Sidebar';
import VerifyEmail from '../screens/verify-email-screen/VerifyEmail';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.VERIFY_EMAIL}>
      <Stack.Screen name={Navigation.DRAWER} component={DrawerNavigator} />
      <Stack.Screen name={Navigation.SPLASH} component={SplashScreen} />
      <Stack.Screen name={Navigation.SPLASH_ONE} component={SplashOne} />
      <Stack.Screen name={Navigation.SIGNUP} component={SignupScreen} />
      <Stack.Screen name={Navigation.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Navigation.VERIFY_EMAIL} component={VerifyEmail} />
      <Stack.Screen
        name={Navigation.PRIVACY_POLICY}
        component={PrivacyPolicyScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

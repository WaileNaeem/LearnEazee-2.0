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
import VerifyEmail from '../screens/verify-email-screen/VerifyEmail';
import ResetPassword from '../screens/reset-password-screen/ResetPassword';
import AllDone from '../screens/all-done-screen/AllDone';
// import AddToCart from '../screens/add-to-cart-screen/AddToCart';
// import MyCart from '../screens/my-cart-screen/MyCart';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Navigation.CHECKOUT}>
      <Stack.Screen name={Navigation.DRAWER} component={DrawerNavigator} />
      <Stack.Screen name={Navigation.SPLASH} component={SplashScreen} />
      <Stack.Screen name={Navigation.SPLASH_ONE} component={SplashOne} />
      <Stack.Screen
        name={Navigation.SIGNUP}
        component={SignupScreen}
        ptions={{animationEnabled: false}}
      />
      <Stack.Screen
        name={Navigation.LOGIN}
        component={LoginScreen}
        options={{animationEnabled: false}}
      />
      <Stack.Screen name={Navigation.VERIFY_EMAIL} component={VerifyEmail} />
      <Stack.Screen
        name={Navigation.RESET_PASSWORD}
        component={ResetPassword}
      />
      <Stack.Screen name={Navigation.ALL_DONE} component={AllDone} />
      <Stack.Screen
        name={Navigation.PRIVACY_POLICY}
        component={PrivacyPolicyScreen}
      />
      {/* <Stack.Screen name={Navigation.ADD_TO_CART} component={AddToCart} />
      <Stack.Screen name={Navigation.MY_CART} component={MyCart} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

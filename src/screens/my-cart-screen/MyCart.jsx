import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {constants} from './constants';
import styles from './styles';
import AppButton from '../../components/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../components/product-card/ProductCard';

const MyCart = () => {
  const navigation = useNavigation();
  const {cartItems} = useSelector(state => state.cart);
  console.log(cartItems);
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const handleCheckout = () => {
    navigation.navigate(Navigation.CHECKOUT);
  };
  return (
    <AppScreen>
      <Header title={constants.MY_CART} onMenuPress={onMenuPress} />
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.myCartText}>{constants.MY_CART}</Text>
        <ProductCard />
      </ScrollView>
      <AppButton
        title={constants.CHECKOUT}
        buttonStyle={styles.checkoutButton}
        textStyle={styles.checkoutButtonText}
        onPress={handleCheckout}
      />
    </AppScreen>
  );
};

export default MyCart;

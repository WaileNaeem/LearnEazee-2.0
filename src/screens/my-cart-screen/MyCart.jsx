import {Text, ScrollView} from 'react-native';
import React from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {constants} from './constants';
import styles from './styles';
import AppButton from '../../components/app-button/AppButton';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';
import {useSelector} from 'react-redux';
import ProductCard from '../../components/product-card/ProductCard';

const MyCart = () => {
  const navigation = useNavigation();
  const {cartItems} = useSelector(state => state.cart);
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const handleCheckout = () => {
    navigation.navigate(Navigation.CHECKOUT);
  };
  const handleEmptyCart = () => {
    navigation.navigate(Navigation.DASHBOARD);
  };
  return (
    <AppScreen>
      <Header title={constants.MY_CART} onMenuPress={onMenuPress} />
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.myCartText}>{constants.MY_CART}</Text>
        <ProductCard />
      </ScrollView>
      {cartItems.length > 0 ? (
        <AppButton
          title={constants.CHECKOUT}
          buttonStyle={styles.buttonStyle}
          color={'black'}
          onPress={handleCheckout}
        />
      ) : (
        <AppButton
          title={constants.DASHBOARD}
          buttonStyle={styles.buttonStyle}
          color={'black'}
          onPress={handleEmptyCart}
        />
      )}
    </AppScreen>
  );
};

export default MyCart;

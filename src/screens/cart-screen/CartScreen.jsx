import React from 'react';
import {View} from 'react-native';
import AppScreen from '../../components/app-screen';
import styles from './styles';
import Header from '../../components/header/Header';
import {constants} from './constants';
import BookCard from '../../components/book-card/BookCard';
import AppButton from '../../components/app-button/AppButton';
import PriceText from '../../components/price-text/PriceText';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';

const CartScreen = () => {
  const navigation = useNavigation();
  const handlePlaceOrder = () => {
    navigation.navigate(Navigation.ORDER_PLACED);
  };
  return (
    <AppScreen>
      <Header title={constants.MY_CART} />
      <View style={styles.contentContainer}>
        <View style={styles.bookDetailsContainer}>
          <BookCard />
          <BookCard />
          <BookCard />
        </View>
        <PriceText title={constants.SUB_TOTAL} value={'$183'} />
        <PriceText title={constants.SHIPPING} value={'$10'} />
        <PriceText title={constants.TOTAL} value={'$93'} />
      </View>
      <AppButton
        title={constants.PLACE_ORDER}
        textStyle={styles.buttonText}
        buttonStyle={styles.buttonContainer}
        onPress={handlePlaceOrder}
      />
    </AppScreen>
  );
};

export default CartScreen;

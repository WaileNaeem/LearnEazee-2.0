import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/header/Header';
import {constants} from './constants';
import {IMAGES} from '../../../utils/images-path';
import {AirbnbRating} from 'react-native-ratings';
import DropDown from '../../components/drop-down-picker/DropDown';
import AppButton from '../../components/app-button/AppButton';
import AppScreen from '../../components/app-screen';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux-toolkit/slices/CartSlice';
import {resetSelectedLicense} from '../../redux-toolkit/slices/LicensceSeatsSlice';
import {IMAGE_RESIZE_MODE} from '../../../utils/constants';

const AddToCart = ({route}) => {
  const navigation = useNavigation();
  const {product} = route.params;
  const dispatch = useDispatch();
  const selectedLicense = useSelector(state => state.license.selectedLicense);
  console.log(selectedLicense);

  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const handleAddToCart = product => {
    const item = {
      ...product,
      quantity: selectedLicense,
      totalPrice: product.price,
    };
    dispatch(addToCart(item));

    dispatch(resetSelectedLicense(item));

    navigation.navigate(Navigation.MY_CART);
  };
  const handleCheckout = () => {
    navigation.navigate(Navigation.CHECKOUT);
  };

  return (
    <AppScreen>
      <Header title={constants.ADD_TO_CART} onMenuPress={onMenuPress} />
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={IMAGES.bookImage11}
            resizeMode={IMAGE_RESIZE_MODE.contain}
            style={styles.bookImage}
          />
        </View>
        <View style={styles.bookDetailsContainer}>
          <View style={styles.bookDetails}>
            <Text style={styles.bookName}>{product.name}</Text>
            <Text style={styles.authorName}>
              by <Text style={styles.authorNameColor}>{product.author}</Text>
            </Text>
            <View style={styles.ratingsContainer}>
              <AirbnbRating
                size={13}
                count={5}
                showRating={false}
                defaultRating={5}
              />
              <Text style={styles.ratings}>({product.rating})</Text>
            </View>
          </View>
          <View style={styles.bookPriceContainer}>
            <Text style={styles.bookPrice}>
              {constants.Price}
              {product.price}
            </Text>
          </View>
        </View>
        <View style={styles.licenseTextContainer}>
          <Text style={styles.lisenceText}>{constants.LICENSE_TO_BUY}</Text>
          <View style={styles.licenseDropDown}>
            <DropDown />
          </View>
        </View>
        <AppButton
          title={constants.ADD_TO_CART}
          buttonStyle={styles.addToCartButton}
          textStyle={styles.addToCartButtonText}
          onPress={() => {
            if (selectedLicense) handleAddToCart(product);
          }}
        />
        <AppButton
          title={constants.CHECKOUT}
          buttonStyle={styles.checkoutButton}
          onPress={handleCheckout}
        />
      </View>
    </AppScreen>
  );
};

export default AddToCart;

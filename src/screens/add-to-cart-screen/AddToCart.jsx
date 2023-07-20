import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/header/Header';
import {constants} from './constants';
import {IMAGES} from '../../../utils/images-path';
import {Rating, AirbnbRating} from 'react-native-ratings';
import DropDown from '../../components/drop-down-picker/DropDown';
import AppButton from '../../components/app-button/AppButton';

const AddToCart = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Header title={constants.ADD_TO_CART} />
        <View style={styles.imageContainer}>
          <Image
            source={IMAGES.bookImage11}
            resizeMode="cover"
            style={styles.bookImage}
          />
        </View>
        <View style={styles.bookDetailsContainer}>
          <View style={styles.bookDetails}>
            <Text style={styles.bookName}>The Family Across the Street</Text>
            <Text style={styles.authorName}>
              by <Text style={styles.authorNameColor}>Nicole Trope </Text>
            </Text>
            <View style={styles.ratingsContainer}>
              <AirbnbRating
                size={13}
                count={5}
                showRating={false}
                defaultRating={5}
              />
            </View>
          </View>
          <View style={styles.bookPriceContainer}>
            <Text style={styles.bookPrice}>Price: $67</Text>
          </View>
        </View>
        <View style={styles.licenseContainer}>
          <View style={styles.licenseTextContainer}>
            <Text style={styles.lisenceText}>{constants.LICENSE_TO_BUY}</Text>
          </View>
          <View style={styles.licenseDropDown}>
            <DropDown />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            title={constants.ADD_TO_CART}
            buttonStyle={styles.addToCartButtonContainer}
            textStyle={styles.addToCartButtonText}
          />
          <AppButton
            title={constants.CHECKOUT}
            buttonStyle={styles.checkoutButtonContainer}
          />
        </View>
      </View>
    </View>
  );
};

export default AddToCart;

import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {constants} from './constants';
import {IMAGES} from '../../../utils/images-path';
import {COLORS} from '../../../utils/colors';
const ProductCard = () => {
  return (
    <View style={styles.bookContainer}>
      <Image style={styles.bookImage} source={IMAGES.book1} />
      <View style={styles.bookDetailContainer}>
        <Text style={styles.bookName}>The Family Across the Street</Text>
        <Text style={styles.authorName}>
          {constants.BY} <Text style={styles.authorNameText}>Nicole Trope</Text>
        </Text>
        <Text style={styles.bookPrice}>{constants.PRICE} 67</Text>
      </View>
      <View style={styles.seatsContainer}>
        <Text style={styles.seatsText}>{constants.NUMBER_OF_SEATS}</Text>
        <View style={styles.counterContainer}>
          <TouchableWithoutFeedback>
            <View>
              <Text style={styles.counter}>+</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.counter}>1</Text>
          <TouchableWithoutFeedback>
            <View>
              <Text style={styles.counter}>-</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.totalAmount}>{constants.TOTAL_AMOUNT}</Text>
        <Text style={styles.price}>{constants.PRICE}67</Text>
      </View>
      <Icon
        name="trash-can-outline"
        size={12}
        color={COLORS.pink2}
        style={styles.trashIcon}
      />
    </View>
  );
};

export default ProductCard;

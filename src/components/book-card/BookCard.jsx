import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../utils/colors';

const BookCard = () => {
  return (
    <View style={styles.bookCard}>
      <Image
        source={IMAGES.book1}
        resizeMode="cover"
        style={styles.bookImage}
      />
      <View style={styles.bookDetails}>
        <Text style={styles.bookName}>The Family Across the Street</Text>
        <Text style={styles.bookPrice}>$67</Text>
      </View>
      <View style={styles.deleteButtonContainer}>
        <Icon name="trash-can-outline" size={20} color={COLORS.pink2} />
      </View>
    </View>
  );
};

export default BookCard;

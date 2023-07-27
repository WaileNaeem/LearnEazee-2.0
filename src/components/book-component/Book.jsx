import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../utils/images-path';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux-toolkit/slices/CartSlice';

const Book = ({book}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleBookDetails = () => {
    navigation.navigate(Navigation.ADD_TO_CART, {product: book});
  };
  const handleAddToCart = book => {
    const item = {...book, quantity: 1, totalPrice: book.price};
    dispatch(addToCart(item));
    navigation.navigate(Navigation.MY_CART);
  };
  return (
    <View style={styles.singlebookContainer}>
      <Pressable onPress={handleBookDetails}>
        <Image source={IMAGES.book1} />
        <Text style={styles.bookName}>{book.name}</Text>
      </Pressable>
      <View style={styles.booksDetails}>
        <Pressable onPress={() => handleAddToCart(book)}>
          <Image source={IMAGES.cartImage} />
        </Pressable>
        <Text style={styles.bookStatus}>{book.content_type}</Text>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  singlebookContainer: {
    marginVertical: '2%',
    marginHorizontal: '1.5%',
  },
  booksDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookName: {
    color: COLORS.black3,
    fontFamily: FONTS.Avenir,
    fontSize: 9.5,
    fontWeight: '400',
    lineHeight: 11.4,
  },
  bookStatus: {
    color: COLORS.grey2,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 10,
  },
});

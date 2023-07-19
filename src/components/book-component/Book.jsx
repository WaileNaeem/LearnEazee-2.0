import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../utils/images-path';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const Book = ({book}) => {
  return (
    <View style={styles.singlebookContainer}>
      <Image source={IMAGES.book1} />
      <Text style={styles.bookName}>{book.name}</Text>
      <View style={styles.booksDetails}>
        <Image source={IMAGES.cartImage} />
        <Text style={styles.bookStatus}>{book.content_type}</Text>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  singlebookContainer: {
    marginVertical: '2%',
    marginHorizontal: '1.7%',
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

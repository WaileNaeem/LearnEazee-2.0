import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {constants} from './constants';
import {IMAGES} from '../../../utils/images-path';
import {COLORS} from '../../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  removeFromCart,
} from '../../redux-toolkit/slices/CartSlice';
const ProductCard = () => {
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = book => {
    dispatch(increment(book));
  };
  const handleDecrement = book => {
    dispatch(decrement(book));
  };
  const handleRemoveFromCart = book => {
    dispatch(removeFromCart(book));
  };
  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map(data => {
          return (
            <View style={styles.bookContainer} key={data?.id}>
              <Image style={styles.bookImage} source={IMAGES.book1} />
              <View style={styles.bookDetailContainer}>
                <Text style={styles.bookName}>{data?.name}</Text>
                <Text style={styles.authorName}>
                  {constants.BY}{' '}
                  <Text style={styles.authorNameText}>{data?.author}</Text>
                </Text>
                <Text style={styles.bookPrice}>
                  {constants.PRICE} {data?.price}
                </Text>
              </View>
              <View style={styles.seatsContainer}>
                <Text style={styles.seatsText}>
                  {constants.NUMBER_OF_SEATS}
                </Text>
                <View style={styles.counterContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => handleIncrement(data)}>
                    <View>
                      <Text style={styles.counter}>+</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Text style={styles.counter}>{data?.quantity}</Text>
                  <TouchableWithoutFeedback
                    onPress={() => handleDecrement(data)}>
                    <View>
                      <Text style={styles.counter}>-</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.totalAmount}>{constants.TOTAL_AMOUNT}</Text>
                <Text style={styles.price}>
                  {constants.PRICE}
                  {data?.totalPrice}
                </Text>
              </View>
              <Icon
                name="trash-can-outline"
                size={12}
                color={COLORS.pink2}
                style={styles.trashIcon}
                onPress={() => handleRemoveFromCart(data)}
              />
            </View>
          );
        })
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>{constants.EMPTY_CART}</Text>
        </View>
      )}
    </>
  );
};

export default ProductCard;

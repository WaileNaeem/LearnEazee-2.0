import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGE_RESIZE_MODE} from '../../../../utils/constants';
import {IMAGES} from '../../../../utils/images-path';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../../navigation/NavigationConstants';

const SliderCard = ({item}) => {
  const navigation = useNavigation();
  const handlePress = item => {
    navigation.navigate(Navigation.ADD_TO_CART, {product: item});
  };
  return (
    <View style={styles.sliderBookContainer}>
      <View style={styles.booksDetailsContainer}>
        <Text style={styles.bookTitle}>{item.name}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        <TouchableWithoutFeedback onPress={() => handlePress(item)}>
          <View style={styles.sliderButton}>
            <Text style={styles.sliderButtonText}>Start Reading</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Image
        style={styles.bookImage}
        resizeMode={IMAGE_RESIZE_MODE.cover}
        source={IMAGES.book1}
      />
    </View>
  );
};

export default SliderCard;

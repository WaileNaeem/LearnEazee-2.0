import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SliderArrow from '../slider-arrow/SliderArrow';
import SliderCard from '../slider-card/SliderCard';
import {books} from '../../../data/books';

const SliderListItem = ({
  item,
  flatListRef,
  itemIndex,
  currentIndex,
  setCurrentIndex,
  lastIndex,
}) => {
  const handleArrowLeft = () => {
    if (itemIndex > 0) {
      flatListRef.current.scrollToIndex({
        index: itemIndex - 1,
        animated: true,
        viewPosition: 0.5,
      });
      setCurrentIndex(itemIndex - 1);
    }
  };
  const handleArrowRight = () => {
    if (itemIndex === books.length - 1) {
      flatListRef.current.scrollToIndex({
        index: 0,
        animated: true,
        viewPosition: 0.5,
      });
      setCurrentIndex(0);
    } else {
      flatListRef.current.scrollToIndex({
        index: itemIndex + 1,
        animated: true,
        viewPosition: 0.5,
      });
      setCurrentIndex(itemIndex + 1);
    }
  };

  return (
    <View
      style={[
        styles.sliderContentContainer,
        currentIndex !== itemIndex && styles.container,
        itemIndex == 0 && {paddingLeft: 15},
        itemIndex == lastIndex && {paddingRight: 15},
      ]}>
      {itemIndex != 0 && currentIndex === itemIndex && (
        <SliderArrow name={'arrow-left'} handlePress={handleArrowLeft} />
      )}

      <SliderCard item={item} />

      {lastIndex != itemIndex && currentIndex === itemIndex && (
        <SliderArrow name={'arrow-right'} handlePress={handleArrowRight} />
      )}
    </View>
  );
};

export default SliderListItem;

import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {books} from '../../data/books';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../utils/colors';
import {IMAGES} from '../../../utils/images-path';
import styles from './styles';
import {Pressable} from 'react-native';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleArrowLeft = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
        viewPosition: 0.5,
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleArrowRight = () => {
    if (currentIndex === books.length - 1) {
      flatListRef.current.scrollToIndex({
        index: 0,
        animated: true,
        viewPosition: 0.5,
      });
      setCurrentIndex(0);
    } else {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
        viewPosition: 0.5,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        data={books}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.id}
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        renderItem={({item}) => (
          <View style={styles.sliderContentContainer}>
            <Pressable onPress={handleArrowLeft} style={styles.arrowContainer}>
              <Fontawesome name="arrow-left" size={15} color={COLORS.white} />
            </Pressable>
            <View style={styles.sliderBookContainer}>
              <View style={styles.booksDetailsContainer}>
                <Text style={styles.bookTitle}>{item.name}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
                <TouchableWithoutFeedback>
                  <View style={styles.sliderButton}>
                    <Text style={styles.sliderButtonText}>Start Reading</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <Image
                style={styles.bookImage}
                resizeMode="cover"
                source={IMAGES.book1}
              />
            </View>
            <Pressable onPress={handleArrowRight} style={styles.arrowContainer}>
              <Fontawesome name="arrow-right" size={15} color={COLORS.white} />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

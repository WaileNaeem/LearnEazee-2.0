import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import {books} from '../../data/books';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../utils/colors';
import {IMAGES} from '../../../utils/images-path';
import styles from './styles';

const Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <FlatList
        data={books}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.id}
        pagingEnabled
        renderItem={({item}) => (
          <View style={styles.sliderContentContainer}>
            <View style={styles.arrowContainer}>
              <Fontawesome name="arrow-left" size={15} color={COLORS.white} />
            </View>
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
                style={styles.slider}
                resizeMode="cover"
                source={IMAGES.book1}
              />
            </View>
            <View style={styles.arrowContainer}>
              <Fontawesome name="arrow-right" size={15} color={COLORS.white} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

import {View, Text, Image} from 'react-native';
import React from 'react';
import AppScreen from '../../components/app-screen';
import {Button} from '@rneui/themed';
import {ScrollView} from 'react-native';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import {constants} from './constants';

const TradionalBook = () => {
  return (
    <AppScreen>
      <View style={styles.contentContainer}>
        <Image
          source={IMAGES.logoColored}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>{constants.TITLE}</Text>
        <Text style={styles.specText}>{constants.PRODUCT_SPECIFICATION}</Text>
        <Text style={styles.editionText}>{constants.EDITION}</Text>
      </View>
    </AppScreen>
  );
};

export default TradionalBook;

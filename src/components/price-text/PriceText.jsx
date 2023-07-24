import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const PriceText = ({title, value}) => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );
};

export default PriceText;

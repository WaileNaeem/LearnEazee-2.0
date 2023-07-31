import React from 'react';
import styles from './styles';
import {View} from 'react-native';

const AppCard = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default AppCard;

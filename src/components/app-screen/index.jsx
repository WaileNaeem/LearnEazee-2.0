import React from 'react';
import {StatusBar} from 'react-native';
import {View} from 'react-native';
import {COLORS} from '../../../utils/colors';
import styles from './styles';

const AppScreen = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      {children}
    </View>
  );
};

export default AppScreen;

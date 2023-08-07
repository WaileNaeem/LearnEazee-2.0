import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../utils/colors';
import styles from './styles';

const AppButton = ({
  title = 'Title',
  buttonStyle = {backgroundColor: COLORS.white},
  textStyle = {color: COLORS.black1},
  onPress,
  isValid,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        color === 'black' && styles.blackBackground,
        color === 'white' && styles.whiteBackground,
        color === 'pink' && styles.pinkBackground,
      ]}
      onPress={onPress}
      isValid={isValid}>
      <Text
        style={[
          styles.text,
          textStyle,
          color === 'black' && styles.whiteText,
          color === 'pink' && styles.whiteText,
          color === 'white' && styles.blackText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

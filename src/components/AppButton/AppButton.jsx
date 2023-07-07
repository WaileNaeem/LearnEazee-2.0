import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS} from '../../../utils/font-family';

const AppButton = ({title, buttonStyle, textStyle, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  text: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 16,
  },
});

export default AppButton;

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const AppButton = ({
  title,
  buttonStyle = {backgroundColor: COLORS.white, height: 50},
  textStyle,
  onPress,
  isValid,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      isValid={isValid}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  text: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: COLORS.white,
  },
});

export default AppButton;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const Footer = ({containerStyle, textStyle}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <Text style={[styles.text, textStyle]}>
        © 2023 LearnEazee. All rights reserved.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.black1,
  },
});

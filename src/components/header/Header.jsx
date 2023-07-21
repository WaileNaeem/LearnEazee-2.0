import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';
import {IMAGES} from '../../../utils/images-path';

const Header = ({title, onMenuPress}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableWithoutFeedback onPress={() => onMenuPress()}>
        <View>
          <Image source={IMAGES.menuLogo} style={styles.menuLogo} />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={styles.screenName}>{title}</Text>
      </View>
      <View style={styles.user}>
        <Image source={IMAGES.countryLogo} style={styles.countryLogo} />
        <Image source={IMAGES.userLogo} style={styles.userLogo} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  screenName: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: FONTS.Avenir,
    color: COLORS.black1,
  },
  user: {
    flexDirection: 'row',
    width: '13%',
    justifyContent: 'space-between',
  },
});

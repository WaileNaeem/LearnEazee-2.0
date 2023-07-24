import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    height: 44,
  },
  text: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.black1,
  },
  buttonStyle: {
    backgroundColor: COLORS.white,
  },
  blackBackground: {
    backgroundColor: COLORS.black1,
  },
  whiteBackground: {
    backgroundColor: COLORS.white,
  },
  pinkBackground: {
    backgroundColor: COLORS.pink3,
  },
  blackText: {
    color: COLORS.black1,
  },
  whiteText: {
    color: COLORS.white,
  },
});

export default styles;

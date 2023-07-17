import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
  },
  passwordChangeText: {
    color: COLORS.black1,
    textAlign: 'center',
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: COLORS.pink3,
  },
  textContainer: {
    marginHorizontal: '16%',
  },
  allDoneText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 30,
    color: COLORS.black1,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    paddingBottom: 5,
  },
  buttonText: {
    color: COLORS.black1,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 20,
  },
  activeButtonContainer: {
    borderBottomColor: COLORS.pink3,
    borderBottomWidth: 2,
  },
  activeButtonText: {
    color: COLORS.pink3,
  },
});

export default styles;

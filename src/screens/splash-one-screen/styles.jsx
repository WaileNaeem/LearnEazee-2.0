import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bookImage: {
    width: '100%',
  },
  contentContainer: {
    backgroundColor: COLORS.pink3,
    flex: 1,
    width: '100%',
    height: height / 2.2,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 40,
    textAlign: 'center',
    color: COLORS.white,
    lineHeight: 47,
  },
  buttonStyle: {
    backgroundColor: COLORS.white,
    height: 44,
    marginTop: '15%',
  },
  textStyle: {
    color: COLORS.pink3,
  },
});
export default styles;

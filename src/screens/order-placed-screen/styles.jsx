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
    alignItems: 'center',
  },
  congratsHeading: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 30,
    color: COLORS.black1,
    marginTop: '8%',
  },
  congratulationsText: {
    color: COLORS.black1,
    textAlign: 'center',
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 18,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: COLORS.pink3,
    marginTop: '8%',
    marginBottom: '20%',
  },
});
export default styles;

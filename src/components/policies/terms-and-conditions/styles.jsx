import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../utils/font-family';
import {COLORS} from '../../../../utils/colors';

const styles = StyleSheet.create({
  headingTop: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 37,
    color: COLORS.black1,
    marginBottom: 10,
    marginTop: 30,
  },
  heading: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 37,
    color: COLORS.black1,
    marginBottom: 10,
  },
  textContent: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.black1,
    textAlign: 'justify',
    marginBottom: 10,
  },
  textContentEnd: {
    marginBottom: 70,
  },
});

export default styles;

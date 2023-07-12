import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../utils/font-family';
import {COLORS} from '../../../../utils/colors';

const styles = StyleSheet.create({
  heading: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 37,
    color: COLORS.black1,
    marginVertical: 20,
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
});

export default styles;

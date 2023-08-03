import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  contentContainer: {
    borderColor: COLORS.black1,
    borderWidth: 1,
    marginHorizontal: '5%',
    marginTop: '15%',
    marginBottom: '10%',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 61,
    height: 80,
    marginVertical: '20%',
  },
  title: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 30,
    color: COLORS.pink3,
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: '40%',
  },
  specText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 24,
    color: COLORS.black1,
    textAlign: 'center',
    marginBottom: '10%',
  },
  editionText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 18,
    color: COLORS.pink3,
    textAlign: 'center',
  },
});
export default styles;

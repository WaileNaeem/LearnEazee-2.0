import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: COLORS.white,
    paddingHorizontal: '1%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 315,
    marginVertical: '10%',
  },
  title: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
  },
  text: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'justify',
  },
});
export default styles;

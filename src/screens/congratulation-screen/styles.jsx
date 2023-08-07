import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '20%',
  },
  contentContainer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 85,
    height: 90,
  },
  congratulationText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
    color: COLORS.black1,
  },
  completionText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21.6,
    textAlign: 'center',
    color: COLORS.black1,
  },
});
export default styles;

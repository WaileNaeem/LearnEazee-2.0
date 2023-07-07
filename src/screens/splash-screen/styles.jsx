import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 40,
    color: COLORS.white,
    fontFamily: FONTS.AccentGraphic,
    alignSelf: 'center',
  },
  progressBarContainer: {
    width: '58%',
    height: 40,
    position: 'absolute',
    bottom: 50,
  },
  percentageText: {
    textAlign: 'right',
    paddingRight: 5,
    color: COLORS.white,
    fontFamily: FONTS.AccentGraphic,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;

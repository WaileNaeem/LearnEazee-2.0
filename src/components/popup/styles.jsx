import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    zIndex: 1,
    top: 30,
    right: 15,
    height: 60,
    width: 69,
    backgroundColor: COLORS.grey4,
  },
  popupStyle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  contentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  text: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 8,
    color: COLORS.black1,
    marginLeft: '10%',
  },
});
export default styles;

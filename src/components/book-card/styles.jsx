import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  bookCard: {
    marginVertical: '2.5%',
    flexDirection: 'row',
    width: '100%',
  },
  bookImage: {
    width: 63,
    height: 89,
  },
  bookDetails: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: '3%',
    paddingVertical: '1%',
  },
  bookName: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.black1,
    lineHeight: 22,
  },
  bookPrice: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.pink3,
  },
  deleteButtonContainer: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '1%',
  },
});
export default styles;

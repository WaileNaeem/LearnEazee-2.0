import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: '2%',
  },
  allCategoriesText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 23,
    color: COLORS.black1,
    marginVertical: 10,
  },
  categoriesContainer: {
    width: '100%',
    height: '5%',
    justifyContent: 'space-around',
  },
  booksContainer: {
    marginVertical: '5%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  noBookError: {
    color: COLORS.black1,
    marginLeft: '35%',
  },
});
export default styles;

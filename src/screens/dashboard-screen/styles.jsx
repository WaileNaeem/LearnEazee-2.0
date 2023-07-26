import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: '2%',
  },
  contentContainer: {
    flex: 1,
  },
  categoriesSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3%',
  },
  viewMoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesHeading: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.black1,
  },
  viewMoreText: {
    color: COLORS.pink3,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 12,
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
  singlebookContainer: {
    marginVertical: '2%',
    marginHorizontal: '1.7%',
  },
  booksDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookName: {
    color: COLORS.black3,
    fontFamily: FONTS.Avenir,
    fontSize: 9.5,
    fontWeight: '400',
    lineHeight: 11.4,
  },
  bookStatus: {
    color: COLORS.grey2,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 10,
  },
  noBookError: {
    color: COLORS.black1,
    marginLeft: '35%',
  },
});
export default styles;

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
  sectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: '5%',
  },
  activeTab: {
    borderBottomColor: COLORS.pink2,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  sectionText: {
    color: COLORS.grey1,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 12,
  },
  activeSection: {
    color: COLORS.pink3,
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
  sliderContainer: {
    width: '100%',
    // height: '20%',
    height: 155,
    marginVertical: '5%',
    backgroundColor: COLORS.pink3,
  },
  sliderContent: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  sliderContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    width: '100%',
  },
  slider: {
    flex: 1,
  },
  arrowContainer: {
    borderColor: COLORS.pink1,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: COLORS.pink1,
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  sliderBookContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.white,
  },
  bookAuthor: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 8,
    color: COLORS.white,
  },
  sliderButton: {
    borderColor: COLORS.white,
    borderWidth: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  sliderButtonText: {
    color: COLORS.pink3,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 8,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: '3%',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%',
  },
  bookImage: {
    height: '100%',
    width: '100%',
  },
  bookDetailsContainer: {
    flexDirection: 'row',
    flex: 0.8,
  },
  bookDetails: {
    width: '50%',
  },
  bookPriceContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  bookPrice: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.black1,
    margin: '2%',
  },
  bookName: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 27,
    color: COLORS.black1,
  },
  authorName: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.black1,
    marginVertical: '5%',
  },
  authorNameColor: {
    color: COLORS.pink3,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ratings: {
    color: COLORS.black1,
    fontFamily: FONTS.Avenir,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 2,
  },
  licenseContainer: {
    flex: 0.4,
    flexDirection: 'row',
  },
  licenseTextContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 50,
  },
  lisenceText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.black1,
  },
  licenseDropDown: {
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: COLORS.black1,
    marginBottom: '3%',
    borderColor: COLORS.black1,
    borderWidth: 1,
    marginTop: '20%',
  },
  addToCartButtonText: {
    color: COLORS.white,
  },
  checkoutButton: {
    borderColor: COLORS.black1,
    borderWidth: 1,
  },
});
export default styles;

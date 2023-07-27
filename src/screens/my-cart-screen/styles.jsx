import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: '2%',
  },
  myCartText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.black1,
    marginVertical: '5%',
  },
  bookContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: '2%',
  },
  bookImage: {
    width: 46,
    height: 66,
  },
  bookDetailContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 4,
  },
  bookName: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 9.5,
    lineHeight: 11,
    color: COLORS.black1,
  },
  authorName: {
    fontFamily: FONTS.Avenir,
    color: COLORS.black,
    fontWeight: '400',
    fontSize: 8,
  },
  authorNameText: {
    color: COLORS.pink3,
  },
  bookPrice: {
    fontWeight: '400',
    fontSize: 10,
    fontFamily: FONTS.Avenir,
    color: COLORS.black1,
  },
  seatsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  seatsText: {
    color: COLORS.black1,
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 9.5,
  },
  counterContainer: {
    flexDirection: 'row',
    marginTop: '10%',
    width: '50%',
    justifyContent: 'space-between',
  },
  counter: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTS.Avenir,
    color: COLORS.black1,
  },
  amountContainer: {
    flex: 1,
    alignItems: 'center',
  },
  totalAmount: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 9.5,
    color: COLORS.black1,
    marginBottom: '11%',
  },
  price: {
    color: COLORS.black1,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 10,
  },
  trashIcon: {
    alignSelf: 'center',
    marginRight: '3%',
  },
  buttonStyle: {
    marginVertical: '5%',
  },
  checkoutButtonText: {
    color: COLORS.white,
  },
});
export default styles;

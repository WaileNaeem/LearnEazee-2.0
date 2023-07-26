import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: 155,
    marginVertical: '5%',
    color: COLORS.white,
  },

  sliderContentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: COLORS.pink3,
    borderRadius: 8,
    width: 282,
  },
  bookImage: {
    width: 74,
    height: 106,
    marginRight: 5,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginTop: '3%',
  },
  sliderButtonText: {
    color: COLORS.pink3,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 8,
  },
  booksDetailsContainer: {
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    marginHorizontal: 20,
    paddingLeft: 0,
    marginLeft: 0,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../utils/font-family';
import {COLORS} from '../../../../utils/colors';

const styles = StyleSheet.create({
  sliderBookContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  bookImage: {
    width: 74,
    height: 106,
    marginRight: 5,
  },
});
export default styles;

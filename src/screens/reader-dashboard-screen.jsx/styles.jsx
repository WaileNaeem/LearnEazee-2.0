import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';
const styles = StyleSheet.create({
  searchBar: {
    width: '96%',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    elevation: 10,
  },
  library: {
    flex: 1,
  },
  libraryTitle: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.black1,
  },
  cardContainer: {
    width: 110,
    height: 171,
  },
  bookImage: {
    width: '100%',
    height: 119,
  },
  bookTitle: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 9.5,
    lineHeight: 11.4,
    letterSpacing: -0.36,
    color: COLORS.black1,
    marginTop: '10%',
  },
  popupButton: {
    position: 'absolute',
    zIndex: 1,
    top: 10,
    right: 20,
  },
});
export default styles;

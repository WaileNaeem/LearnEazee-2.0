import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.pink3,
  },
  contentContainer: {
    flex: 1,
  },
  crossImageContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  userImage: {
    borderRadius: 50,
  },
  userInfoContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 26,
    color: COLORS.white,
  },
  userEmail: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.white,
  },
  buttonStyle: {
    width: '80%',
    backgroundColor: COLORS.white,
    height: 44,
  },
  textStyle: {
    fontSize: 18,
    color: COLORS.pink3,
  },
  buttonContainer: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.white,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
export default styles;

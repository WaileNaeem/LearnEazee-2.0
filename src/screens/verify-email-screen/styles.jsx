import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  verifyText: {
    color: COLORS.black1,
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 24,
    marginVertical: '15%',
  },
  inputFieldContainer: {
    borderBottomColor: COLORS.grey3,
    borderBottomWidth: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8%',
  },
  inputField: {
    color: COLORS.black1,
  },
  buttonContainer: {
    backgroundColor: COLORS.pink3,
    height: 44,
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 10,
  },
  errorMsg: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
});
export default styles;

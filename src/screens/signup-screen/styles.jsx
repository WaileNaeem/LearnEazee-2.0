import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    marginVertical: '5%',
  },
  activeTab: {
    borderBottomColor: COLORS.pink3,
    borderBottomWidth: 2,
  },
  activeTabText: {color: COLORS.pink3},
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpHeading: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 40,
    color: COLORS.black1,
  },
  formContainer: {
    width: '85%',
  },
  inputFieldContainer: {
    borderBottomColor: COLORS.grey3,
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    color: COLORS.black1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  agreeText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.black1,
  },
  termsText: {
    color: COLORS.pink3,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: '8%',
  },
  buttonText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 20,
    color: COLORS.white,
  },
  buttonStyle: {
    backgroundColor: COLORS.pink3,
    width: '100%',
    height: 44,
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadyAccountText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.black1,
  },
  loginText: {
    color: COLORS.pink3,
  },
  errorMsg: {
    color: 'red',
    alignSelf: 'flex-start',
    fontSize: 12,
  },
});
export default styles;

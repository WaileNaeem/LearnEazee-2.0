import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  tabContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    marginVertical: '7%',
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
    // borderColor: 'red',
    // borderWidth: 1,
  },
  loginText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 40,
    color: COLORS.black1,
  },
  socialLoginButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: '15%',
    height: '8%',
    marginBottom: '10%',
  },
  loginForm: {
    width: '80%',
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
    flex: 1,
  },
  forgotPassword: {
    marginVertical: '5%',
    alignItems: 'flex-start',
    width: '80%',
    color: COLORS.black1,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 12,
  },
  reset: {
    color: COLORS.pink3,
    fontSize: 14,
  },
  buttonText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 20,
    color: COLORS.white,
  },
  buttonStyle: {
    backgroundColor: COLORS.pink3,
    width: '80%',
    height: 44,
  },
  createAccount: {
    color: COLORS.black1,
    fontWeight: '400',
    fontFamily: FONTS.Avenir,
    fontSize: 14,
    marginVertical: '5%',
  },
  signUp: {
    color: COLORS.pink3,
  },
  errorMsg: {
    color: 'red',
    alignSelf: 'flex-start',
    fontSize: 12,
  },
});

export default styles;

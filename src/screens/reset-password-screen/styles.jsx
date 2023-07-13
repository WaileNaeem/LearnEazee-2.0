import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2,
    marginTop: '5%',
  },
  screenTitle: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 24,
  },
  formContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1.5,
  },
  appButtonContainer: {
    backgroundColor: COLORS.pink3,
  },
  appButtonTextStyle: {
    color: COLORS.white,
    fontFamily: FONTS.Avenir,
    fontSize: 20,
    fontWeight: '400',
  },
  errorMsg: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  inputField: {
    width: '80%',
  },
});
export default styles;

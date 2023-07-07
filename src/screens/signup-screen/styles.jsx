import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    paddingBottom: 5,
  },
  buttonText: {
    color: COLORS.black1,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 20,
  },
  signUpHeading: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 40,
    color: COLORS.black1,
    marginBottom: 15,
  },
  formContainer: {
    width: '85%',
  },
  inputFieldContainer: {
    borderBottomColor: COLORS.grey3,
    borderBottomWidth: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    color: COLORS.black1,
  },
  checkbox: {
    flex: 1,
    marginVertical: 10,
  },
});
export default styles;

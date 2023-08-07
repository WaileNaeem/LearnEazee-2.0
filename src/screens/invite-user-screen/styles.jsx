import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.9,
    width: '90%',
    backgroundColor: COLORS.white1,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  inviteText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.black1,
    alignSelf: 'center',
    marginVertical: '10%',
  },
  input: {
    color: COLORS.black,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
  },
  orText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 18,
    alignSelf: 'center',
    color: COLORS.black1,
  },
  dropDown: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.black1,
  },
  buttonStyle: {
    marginVertical: '5%',
  },
  dropDownValue: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.black1,
  },
  labelStyle: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.grey1,
  },
});
export default styles;

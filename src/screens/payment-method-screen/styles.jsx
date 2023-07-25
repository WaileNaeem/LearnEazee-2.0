import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: '3%',
  },
  scrollViewContainer: {
    flex: 1,
    paddingHorizontal: '3%',
  },
  paymentMethodText: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.black1,
    marginVertical: '5%',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: '5%',
  },
  textInputFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNumberStyle: {
    width: '50%',
  },
  cvvStyle: {
    width: '20%',
  },
  expiryStyle: {
    width: '20%',
  },
  continueButton: {
    marginBottom: '15%',
  },
  errorMsg: {
    color: 'red',
    alignSelf: 'flex-start',
  },
});

export default styles;

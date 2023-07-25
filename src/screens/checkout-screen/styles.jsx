import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: '3%',
  },
  scrollView: {
    flex: 1,
  },
  headingTextStyles: {
    fontFamily: FONTS.AccentGraphic,
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.black1,
    marginVertical: '5%',
  },
  adjacentTextFieldsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  adjacentTextField: {
    width: '45%',
  },
  buttonContainer: {
    paddingVertical: '15%',
  },
  errorMsg: {
    color: 'red',
    alignSelf: 'flex-start',
  },
});
export default styles;

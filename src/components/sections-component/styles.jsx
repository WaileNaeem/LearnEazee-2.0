import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const styles = StyleSheet.create({
  sectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: '5%',
  },
  tab: {
    paddingBottom: 5,
  },
  activeTab: {
    borderBottomColor: COLORS.pink2,
    borderBottomWidth: 1,
  },
  sectionText: {
    color: COLORS.grey1,
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 12,
  },
  activeSection: {
    color: COLORS.pink3,
  },
});
export default styles;

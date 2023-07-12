import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatlistContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    width: '100%',
    height: '5%',
    marginVertical: '12%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 7,
    paddingHorizontal: 10,
    borderColor: COLORS.black1,
    borderWidth: 1,
  },
  tabText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 11,
  },
  activeTab: {
    backgroundColor: COLORS.pink3,
    borderColor: COLORS.pink3,
    borderWidth: 1,
  },
  activeTabText: {
    color: COLORS.white1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
export default styles;

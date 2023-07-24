import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
  },
  image: {
    width: 34.67,
    height: 23.25,
  },
  activeTab: {
    borderColor: COLORS.pink3,
    borderWidth: 1,
  },
});
export default styles;

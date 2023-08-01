import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  socialLoginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    borderRadius: 50,
    height: '100%',
    elevation: 1,
  },
  socialLoginText: {
    color: COLORS.black1,
    marginLeft: 10,
  },
});
export default styles;

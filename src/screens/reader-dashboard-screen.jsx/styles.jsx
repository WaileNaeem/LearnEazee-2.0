import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: '90%',
    width: '46%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
  },
  adjacentContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  library: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
});
export default styles;

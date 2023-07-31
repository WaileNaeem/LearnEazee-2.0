import {TouchableOpacity} from 'react-native';
import React from 'react';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {COLORS} from '../../../../utils/colors';

const SliderArrow = ({name, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.arrowContainer}>
      <Fontawesome name={name} size={15} color={COLORS.white} />
    </TouchableOpacity>
  );
};

export default SliderArrow;

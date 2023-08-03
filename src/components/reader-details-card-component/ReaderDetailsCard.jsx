import React from 'react';
import {View, Text} from 'react-native';
import {Surface} from 'react-native-paper';
import styles from './styles';
import {COLORS} from '../../../utils/colors';

const ReaderDetailsCard = () => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.adjacentContainer}>
        <Surface
          style={[styles.surface, {backgroundColor: '#fdf1f2'}]}
          elevation={4}>
          <Text>Total Books</Text>
        </Surface>
        <Surface
          style={[styles.surface, {backgroundColor: '#eff8f0'}]}
          elevation={4}>
          <Text>Completion Rate</Text>
        </Surface>
      </View>
      <View style={styles.adjacentContainer}>
        <Surface
          style={[styles.surface, {backgroundColor: '#eff6fb'}]}
          elevation={4}>
          <Text>Target Achieved</Text>
        </Surface>
        <Surface
          style={[styles.surface, {backgroundColor: '#fff6eb'}]}
          elevation={4}>
          <Text style={{color: COLORS.black1, fontSize: 16, fontWeight: '500'}}>
            Reading Hours
          </Text>
        </Surface>
      </View>
    </View>
  );
};

export default ReaderDetailsCard;

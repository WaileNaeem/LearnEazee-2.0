import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';

const Dashboard = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.mainContainer}>
      <Text>hello</Text>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

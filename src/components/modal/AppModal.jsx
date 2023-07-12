import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const AppModal = ({isVisible, message}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={{flex: 1}}>
          <Text>{message}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;

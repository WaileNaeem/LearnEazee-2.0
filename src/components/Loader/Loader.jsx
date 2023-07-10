import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarIndicator} from 'react-native-indicators';
import Modal from 'react-native-modal';

const Loader = ({isVisible}) => {
  return (
    <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut">
      <BarIndicator color="white" />
    </Modal>
  );
};

export default Loader;

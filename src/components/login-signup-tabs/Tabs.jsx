import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {constants} from './constants';

const Tabs = () => {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const signupTabHandler = () => {};
  const loginTabHandler = () => {
    setIsButtonActive(false);
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback
        style={[
          styles.buttonContainer,
          isButtonActive === true && styles.activeButtonContainer,
        ]}>
        <Text
          style={[
            styles.buttonText,
            isButtonActive === true && styles.activeButtonText,
          ]}>
          {constants.SIGNUP}
        </Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{constants.LOGIN}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Tabs;

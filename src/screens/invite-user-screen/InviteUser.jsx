import {View, Text, Button} from 'react-native';
import React, {useState, useRef} from 'react';
import {Overlay, Icon, Input} from '@rneui/themed';
import styles from './styles';
import AppButton from '../../components/app-button/AppButton';
import {constants} from './constants';
import {COLORS} from '../../../utils/colors';
import {ScrollView} from 'react-native';
import UserDropdown from '../../components/user-dropdown/UserDropdown';

const InviteUser = ({isVisible, setIsVisible}) => {
  const handleBackdropPress = () => {
    console.log('Backdrop Pressed');
    setIsVisible(false);
  };
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const validateInput = text => {
    const trimmedText = text.trim();

    if (trimmedText.length === 0) {
      setError('Input cannot be empty.');
    } else if (!isValidEmail(trimmedText)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
    setInputValue(text);
  };

  const isValidEmail = email => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={handleBackdropPress}
      overlayStyle={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <Icon
          name="close-circle-outline"
          type="ionicon"
          style={styles.icon}
          size={30}
          onPress={handleBackdropPress}
        />
        <Text style={styles.inviteText}>{constants.INVITE}</Text>
        <Input
          ref={inputRef}
          placeholder={constants.EMAIL_INVITE}
          placeholderTextColor={COLORS.grey1}
          errorStyle={{color: 'red'}}
          style={styles.input}
          onChangeText={validateInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          errorMessage={isFocused ? error : ''}
        />
        <Text style={styles.orText}>{constants.OR}</Text>
        {/* <Picker
          selectedValue={selecteduser}
          mode="dropdown"
          prompt="Select A value"
          enabled={true}
          itemStyle={{color: COLORS.black1}}
          onValueChange={(itemValue, itemIndex) => setSelectedUser(itemValue)}>
          <Picker.Item
            label={constants.SELECT}
            style={styles.labelStyle}
            enabled={false}
          />
          <Picker.Item
            label="Waile"
            value="waile"
            style={styles.dropDownValue}
          />
          <Picker.Item
            label="Naeem"
            value="naeem"
            style={styles.dropDownValue}
          />
          <Picker.Item
            label="Ahmad"
            value="ahmad"
            style={styles.dropDownValue}
          />
        </Picker> */}
        <UserDropdown />

        <AppButton
          color={'black'}
          buttonStyle={styles.buttonStyle}
          title={constants.CONFIRM}
        />
        <AppButton
          color={'white'}
          title={constants.CANCEL}
          onPress={handleBackdropPress}
        />
      </ScrollView>
    </Overlay>
  );
};

export default InviteUser;

// <Dialog
//   isVisible={isVisible}
//   onBackdropPress={handleBackdropPress}
//   animationType="slide"
//   overlayStyle={styles.mainContainer}>
//   <Dialog.Title title="Dialog Title" />
//   <Text>Dialog body text. Add relevant information here.</Text>
//   <Dialog.Actions>
//     <Dialog.Button
//       title="ACTION 1"
//       onPress={() => console.log('Primary Action Clicked!')}
//     />
//     <Dialog.Button
//       title="ACTION 2"
//       onPress={() => console.log('Secondary Action Clicked!')}
//     />
//   </Dialog.Actions>
// </Dialog>

// import * as React from "react";
// import { Input } from "@rneui/base";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

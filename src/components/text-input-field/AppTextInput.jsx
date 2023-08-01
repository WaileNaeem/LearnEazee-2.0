import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';

const AppTextInput = ({
  maxLength,
  icon,
  errorStyles,
  textInputStyle,
  iconPress,
  ...props
}) => {
  return (
    <View style={[styles.inputFieldContainer, errorStyles, textInputStyle]}>
      <TextInput
        style={styles.inputField}
        placeholderTextColor={COLORS.grey3}
        maxLength={maxLength}
        {...props}
      />
      {icon && (
        <TouchableWithoutFeedback
          onPress={() => {
            if (iconPress) iconPress();
          }}>
          <FeatherIcon name={icon} size={20} color={COLORS.black1} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputFieldContainer: {
    borderBottomColor: COLORS.grey3,
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    color: COLORS.black1,
    flex: 1,
  },
});

import {View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {constant, constants} from './constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AppTextInput from '../../components/text-input-field/AppTextInput';
import {COLORS} from '../../../utils/colors';
import {useFormik} from 'formik';
import DropDown from '../../components/drop-down-picker/DropDown';
import AppButton from '../../components/app-button/AppButton';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const {values, errors, handleBlur, handleSubmit, setValues} = useFormik({});
  const onChangeTextHandler = (value, key) => {
    setValues(prev => ({...prev, [key]: value}));
  };
  return (
    <AppScreen>
      <Header title={constants.CHECKOUT} onMenuPress={onMenuPress} />
      <KeyboardAvoidingView behavior="height" style={styles.contentContainer}>
        <Text style={styles.headingTextStyles}>
          {constants.CONTACT_INFORMATION}
        </Text>
        <AppTextInput
          maxLength={50}
          placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
          placeholderTextColor={COLORS.grey3}
          KeyboardType="email-address"
          value={values?.email}
          onChangeText={text => onChangeTextHandler(text, constants.EMAIL_KEY)}
        />
        <Text style={styles.headingTextStyles}>
          {constants.SHIPPING_INFORMATION}
        </Text>
        <AppTextInput
          maxLength={50}
          placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
          placeholderTextColor={COLORS.grey3}
          KeyboardType="email-address"
          value={values?.email}
          onChangeText={text => onChangeTextHandler(text, constants.EMAIL_KEY)}
        />
        <View style={styles.adjacentTextFieldsContainer}>
          <AppTextInput
            maxLength={50}
            placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
            placeholderTextColor={COLORS.grey3}
            value={values?.email}
            onChangeText={text =>
              onChangeTextHandler(text, constants.EMAIL_KEY)
            }
            textInputStyle={styles.adjacentTextField}
          />
          <AppTextInput
            maxLength={50}
            placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
            placeholderTextColor={COLORS.grey3}
            value={values?.email}
            onChangeText={text =>
              onChangeTextHandler(text, constants.EMAIL_KEY)
            }
            textInputStyle={styles.adjacentTextField}
          />
        </View>
        <AppTextInput
          maxLength={50}
          placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
          placeholderTextColor={COLORS.grey3}
          KeyboardType="email-address"
          value={values?.email}
          onChangeText={text => onChangeTextHandler(text, constants.EMAIL_KEY)}
        />
        <AppTextInput
          maxLength={50}
          placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
          placeholderTextColor={COLORS.grey3}
          KeyboardType="email-address"
          value={values?.email}
          onChangeText={text => onChangeTextHandler(text, constants.EMAIL_KEY)}
        />
        <View style={styles.adjacentTextFieldsContainer}>
          <AppTextInput
            maxLength={50}
            placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
            placeholderTextColor={COLORS.grey3}
            value={values?.email}
            onChangeText={text =>
              onChangeTextHandler(text, constants.EMAIL_KEY)
            }
            textInputStyle={styles.adjacentTextField}
          />
          <AppTextInput
            maxLength={50}
            placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
            placeholderTextColor={COLORS.grey3}
            value={values?.email}
            onChangeText={text =>
              onChangeTextHandler(text, constants.EMAIL_KEY)
            }
            textInputStyle={styles.adjacentTextField}
          />
        </View>
        <AppTextInput
          maxLength={50}
          placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
          placeholderTextColor={COLORS.grey3}
          value={values?.email}
          onChangeText={text => onChangeTextHandler(text, constants.EMAIL_KEY)}
        />
        <AppButton
          title={constants.CONTINUE}
          buttonStyle={styles.continueButton}
          textStyle={styles.buttonText}
        />
      </KeyboardAvoidingView>
    </AppScreen>
  );
};

export default CheckoutScreen;

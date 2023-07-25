import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {constants, keys} from './constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AppTextInput from '../../components/text-input-field/AppTextInput';
import PaymentMethods from '../../components/payment-methods/PaymentMethods';
import {COLORS} from '../../../utils/colors';
import AppButton from '../../components/app-button/AppButton';
import {Navigation} from '../../navigation/NavigationConstants';
import {useFormik} from 'formik';
import {generateSchema} from '../../../utils/form-validations';
import {BackHandler} from 'react-native';

const PaymentMethodScreen = () => {
  const cardDetails = {
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    expiry: '',
  };
  const navigation = useNavigation();
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const {handleBlur, handleSubmit, touched, errors, values, setValues} =
    useFormik({
      initialValues: cardDetails,
      validationSchema: generateSchema(cardDetails),
      onSubmit: values => {
        console.log('Card details submitted', values);
        navigation.navigate(Navigation.CART);
      },
    });
  console.log(errors);
  const onChangeTextHandler = (value, key) => {
    if (key == 'cardHolderName') {
      setValues(prev => ({...prev, [key]: value}));
    } else {
      const numericValue = value.replace(/[^0-9]/g, '');
      setValues(prev => ({...prev, [key]: numericValue}));
    }
  };

  useEffect(() => {
    const backAction = () => {
      navigation.replace(Navigation.CHECKOUT);
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <AppScreen>
      <Header title={constants.PAYMENT_METHOD} onMenuPress={onMenuPress} />
      <ScrollView
        style={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.paymentMethodText}>{constants.PAYMENT_METHOD}</Text>
        <View style={styles.paymentMethodContainer}>
          <PaymentMethods />
        </View>
        <AppTextInput
          placeholder={constants.CARD_HOLDER_NAME_PLACEHOLDER}
          placeholderTextColor={COLORS.grey3}
          value={values?.cardHolderName}
          onChangeText={text =>
            onChangeTextHandler(text, keys.CARD_HOLDER_NAME)
          }
          onBlur={handleBlur(keys.CARD_HOLDER_NAME)}
        />
        {touched?.cardHolderName && errors?.cardHolderName && (
          <Text style={styles.errorMsg}>{errors?.cardHolderName}</Text>
        )}
        <View
          style={[
            styles.textInputFieldContainer,
            {
              marginTop:
                errors?.cardHolderName && touched?.cardHolderName ? 0 : 19.455,
            },
          ]}>
          <View style={styles.cardNumberStyle}>
            <AppTextInput
              placeholder={constants.CARD_NUMBER_PLACEHOLDER}
              placeholderTextColor={COLORS.grey3}
              inputMode="numeric"
              maxLength={16}
              value={values?.cardNumber}
              onChangeText={text => onChangeTextHandler(text, keys.CARD_NUMBER)}
              onBlur={handleBlur(keys.CARD_NUMBER)}
            />
            {touched?.cardNumber && errors?.cardNumber && (
              <Text style={styles.errorMsg}>{errors?.cardNumber}</Text>
            )}
          </View>
          <View style={styles.cvvStyle}>
            <AppTextInput
              placeholder={constants.CVV_PLACEHOLDER}
              placeholderTextColor={COLORS.grey3}
              maxLength={3}
              keyboardType="number-pad"
              value={values?.cvv}
              onChangeText={text => onChangeTextHandler(text, keys.CVV)}
              onBlur={handleBlur(keys.CVV)}
            />
            {touched?.cvv && errors?.cvv && (
              <Text style={styles.errorMsg}>{errors?.cvv}</Text>
            )}
          </View>
          <View style={styles.expiryStyle}>
            <AppTextInput
              placeholder={constants.EXPIRY_PLACEHOLDER}
              placeholderTextColor={COLORS.grey3}
              keyboardType="number-pad"
              value={values?.expiry}
              onChangeText={text => onChangeTextHandler(text, keys.EXPIRY)}
              onBlur={handleBlur(keys.EXPIRY)}
            />
            {touched?.expiry && errors?.expiry && (
              <Text style={styles.errorMsg}>{errors?.expiry}</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.continueButton}>
        <AppButton
          title={constants.CONTINUE}
          color="black"
          onPress={handleSubmit}
        />
      </View>
    </AppScreen>
  );
};

export default PaymentMethodScreen;

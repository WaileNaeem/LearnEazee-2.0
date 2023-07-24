import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {constant, constants, keys} from './constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AppTextInput from '../../components/text-input-field/AppTextInput';
import {COLORS} from '../../../utils/colors';
import {useFormik} from 'formik';
import AppButton from '../../components/app-button/AppButton';
import {generateSchema} from '../../../utils/form-validations';
import CountryDropdown from '../../components/countries-dropdow/CountryDropdown';
import {Navigation} from '../../navigation/NavigationConstants';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const userDetails = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    appartment: '',
    city: '',
    postalCode: '',
    phone: '',
  };
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const handleContinue = () => {
    navigation.navigate(Navigation.PAYMENT);
  };
  const {handleBlur, handleSubmit, touched, errors, values, setValues} =
    useFormik({
      initialValues: userDetails,
      validationSchema: generateSchema(userDetails),
      onSubmit: async values => {
        console.log(values);
      },
    });
  const onChangeTextHandler = (value, key) => {
    setValues(prev => ({...prev, [key]: value}));
  };
  return (
    <AppScreen>
      <Header title={constants.CHECKOUT} onMenuPress={onMenuPress} />
      <KeyboardAvoidingView behavior="height" style={styles.contentContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.scrollView}>
          <Text style={styles.headingTextStyles}>
            {constants.CONTACT_INFORMATION}
          </Text>
          <AppTextInput
            maxLength={50}
            placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
            placeholderTextColor={COLORS.grey1}
            KeyboardType="email-address"
            value={values?.email}
            onChangeText={text =>
              onChangeTextHandler(text, keys.EMAIL_ADDRESS_KEY)
            }
            onBlur={handleBlur(keys.EMAIL_ADDRESS_KEY)}
          />
          {touched?.email && errors?.email && (
            <Text style={styles.errorMsg}>{errors?.email}</Text>
          )}
          <Text style={styles.headingTextStyles}>
            {constants.SHIPPING_INFORMATION}
          </Text>
          <CountryDropdown />
          <View style={styles.adjacentTextFieldsContainer}>
            <View style={styles.adjacentTextField}>
              <AppTextInput
                maxLength={31}
                placeholder={constants.FIRST_NAME_PLACEHOLDER}
                placeholderTextColor={COLORS.grey1}
                value={values?.firstName}
                onChangeText={text =>
                  onChangeTextHandler(text, keys.FIRST_NAME_KEY)
                }
                onBlur={handleBlur(keys.FIRST_NAME_KEY)}
              />
              {touched?.firstName && errors?.firstName && (
                <Text style={styles.errorMsg}>{errors?.firstName}</Text>
              )}
            </View>
            <View style={styles.adjacentTextField}>
              <AppTextInput
                maxLength={50}
                placeholder={constants.LAST_NAME_PLACEHOLDER}
                placeholderTextColor={COLORS.grey1}
                value={values?.lastName}
                onChangeText={text =>
                  onChangeTextHandler(text, keys.LAST_NAME_KEY)
                }
                onBlur={handleBlur(keys.LAST_NAME_KEY)}
              />
              {touched?.lastName && errors?.lastName && (
                <Text style={styles.errorMsg}>{errors?.lastName}</Text>
              )}
            </View>
          </View>

          <AppTextInput
            placeholder={constants.ADDRESS_PLACEHOLDER}
            placeholderTextColor={COLORS.grey1}
            value={values?.address}
            onChangeText={text => onChangeTextHandler(text, keys.ADDRESS_KEY)}
            onBlur={handleBlur(keys.ADDRESS_KEY)}
          />
          {touched?.address && errors?.address && (
            <Text style={styles.errorMsg}>{errors?.address}</Text>
          )}
          <AppTextInput
            placeholder={constants.APPARTMENT_PLACEHOLDER}
            placeholderTextColor={COLORS.grey1}
          />
          <View style={styles.adjacentTextFieldsContainer}>
            <AppTextInput
              maxLength={50}
              placeholder={constants.CITY_PLACEHOLDER}
              placeholderTextColor={COLORS.grey1}
              value={values?.city}
              onChangeText={text => onChangeTextHandler(text, keys.CITY_KEY)}
              textInputStyle={styles.adjacentTextField}
            />
            {touched?.city && errors?.city && (
              <Text style={styles.errorMsg}>{errors?.city}</Text>
            )}
            <AppTextInput
              maxLength={50}
              placeholder={constants.POSTAL_CODE_PLACEHOLDER}
              placeholderTextColor={COLORS.grey1}
              value={values?.postalCode}
              onChangeText={text =>
                onChangeTextHandler(text, keys.POSTAL_CODE_KEY)
              }
              textInputStyle={styles.adjacentTextField}
            />
            {touched?.postalCode && errors?.postalCode && (
              <Text style={styles.errorMsg}>{errors?.postalCode}</Text>
            )}
          </View>
          <AppTextInput
            maxLength={50}
            placeholder={constants.PHONE_PLACEHOLDER}
            placeholderTextColor={COLORS.grey1}
            value={values?.phone}
            onChangeText={text => onChangeTextHandler(text, keys.PHONE_KEY)}
          />
          {touched?.phone && errors?.phone && (
            <Text style={styles.errorMsg}>{errors?.phone}</Text>
          )}
          <View style={styles.buttonContainer}>
            <AppButton
              title={constants.CONTINUE}
              color={'black'}
              onPress={handleContinue}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AppScreen>
  );
};

export default CheckoutScreen;

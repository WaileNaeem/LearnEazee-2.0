import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {COLORS} from '../../../utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CheckBox from '@react-native-community/checkbox';
import {constants} from './constants';
import AppButton from '../../components/app-button/AppButton';
import Footer from '../../components/footer/Footer';
import {useFormik} from 'formik';
import {generateSchema} from '../../../utils/form-validations';
import Loader from '../../components/Loader/Loader';
import api from '../../../api/baseApi';

const SignupScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isCheckBoxErrorVisible, setisCheckBoxErrorVisible] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
  const user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    errors,
    values,
    isValid,
    handleReset,
  } = useFormik({
    initialValues: user,
    validationSchema: generateSchema(user),
    onSubmit: async values => {
      if (toggleCheckBox) {
        setisCheckBoxErrorVisible(false);
        setIsLoaderVisible(true);
        const response = await api.post(constants.API_ENDPOINT, {
          first_name: values?.firstName,
          last_name: values?.lastName,
          email: values?.email,
          password: values?.password,
          password_confirmation: values.confirmPassword,
        });
        if (response.ok) {
          setIsLoaderVisible(false);
          console.log('Successfully Signed in');
        } else {
          setIsLoaderVisible(false);
          console.log('Sign in Failed');
        }
      } else {
        setisCheckBoxErrorVisible(true);
      }
    },
  });

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.contentContainer}>
            <Text style={styles.signUpHeading}>{constants.SIGNUP}</Text>
            {/* <===============SIGNUP FORM ======================> */}
            <View style={styles.formContainer}>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder={constants.FIRST_NAME_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  maxLength={31}
                  value={values?.firstName}
                  onChangeText={handleChange('firstName')}
                  onChange={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                />
                <FeatherIcon name="user" size={20} color={COLORS.black1} />
              </View>
              {touched?.firstName && errors?.firstName && (
                <Text style={styles.errorMsg}>{errors?.firstName}</Text>
              )}
              <View
                style={[
                  styles.inputFieldContainer,
                  {
                    marginTop:
                      errors?.firstName && touched?.firstName ? 0 : 19.455,
                  },
                ]}>
                <TextInput
                  style={styles.inputField}
                  placeholder={constants.LAST_NAME_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  maxLength={31}
                  value={values?.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                />
                <FeatherIcon name="user" size={20} color={COLORS.black1} />
              </View>
              {touched?.lastName && errors?.lastName && (
                <Text style={styles.errorMsg}>{errors?.lastName}</Text>
              )}
              <View
                style={[
                  styles.inputFieldContainer,
                  {
                    marginTop:
                      errors?.lastName && touched?.lastName ? 0 : 19.455,
                  },
                ]}>
                <TextInput
                  style={styles.inputField}
                  placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  maxLength={50}
                  keyboardType="email-address"
                  value={values?.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <Fontisto name="email" size={20} color={COLORS.black1} />
              </View>
              {touched?.email && errors?.email && (
                <Text style={styles.errorMsg}>{errors?.email}</Text>
              )}
              <View
                style={[
                  styles.inputFieldContainer,
                  {
                    marginTop: errors?.email && touched?.email ? 0 : 19.455,
                  },
                ]}>
                <TextInput
                  style={styles.inputField}
                  placeholder={constants.PASSWORD_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  secureTextEntry={showPassword}
                  maxLength={30}
                  value={values?.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <TouchableWithoutFeedback
                  onPress={() => setShowPassword(!showPassword)}>
                  <FeatherIcon
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color={COLORS.black1}
                    value={values?.password}
                  />
                </TouchableWithoutFeedback>
              </View>
              {touched?.password && errors?.password && (
                <Text style={styles.errorMsg}>{errors?.password}</Text>
              )}
              <View
                style={[
                  styles.inputFieldContainer,
                  {
                    marginTop: errors?.email && touched?.email ? 0 : 19.455,
                  },
                ]}>
                <TextInput
                  style={styles.inputField}
                  placeholder={constants.CONFIRM_PASSWORD_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  secureTextEntry={showConfirmPassword}
                  maxLength={30}
                  value={values?.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
                <TouchableWithoutFeedback
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <FeatherIcon
                    name={showConfirmPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color={COLORS.black1}
                  />
                </TouchableWithoutFeedback>
              </View>
              {touched?.confirmPassword && errors?.confirmPassword && (
                <Text style={styles.errorMsg}>{errors?.confirmPassword}</Text>
              )}
              <View
                style={[
                  styles.checkboxContainer,
                  {
                    marginTop:
                      errors?.confirmPassword && touched?.confirmPassword
                        ? 0
                        : 19.455,
                  },
                ]}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={styles.agreeText}>
                  {constants.AGREE_TEXT}{' '}
                  <Text style={styles.termsText}>{constants.TERMS_TEXT}</Text>
                </Text>
              </View>
              {isCheckBoxErrorVisible && (
                <Text style={styles.errorMsg}>{constants.CHECKBOX_ERROR}</Text>
              )}
              <View style={styles.buttonContainer}>
                <AppButton
                  isValid={!isValid}
                  buttonStyle={styles.buttonStyle}
                  title={constants.SIGNUP}
                  textStyle={styles.buttonText}
                  onPress={handleSubmit}
                />
              </View>
              <View style={styles.loginContainer}>
                <Text style={styles.alreadyAccountText}>
                  {constants.ALREADY_ACCOUNT}{' '}
                  <Text style={styles.loginText}>{constants.LOGIN}</Text>
                </Text>
              </View>
            </View>
          </View>
          <Footer />
        </ScrollView>
      </TouchableWithoutFeedback>
      <Loader isVisible={isLoaderVisible} />
    </View>
  );
};

export default SignupScreen;

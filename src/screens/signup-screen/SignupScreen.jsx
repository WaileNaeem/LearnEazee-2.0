import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {COLORS} from '../../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import {constants} from './constants';
import AppButton from '../../components/app-button/AppButton';
import Footer from '../../components/footer/Footer';
import {useFormik} from 'formik';
import {generateSchema} from '../../../utils/form-validations';
import Loader from '../../components/Loader/Loader';
import api from '../../../api/baseApi';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';
import Tabs from '../../components/tabs/Tabs';
import AppTextInput from '../../components/text-input-field/AppTextInput';
import AppScreen from '../../components/app-screen';

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

  const navigation = useNavigation();

  const {
    handleBlur,
    handleSubmit,
    touched,
    errors,
    values,
    isValid,
    setValues,
  } = useFormik({
    initialValues: user,
    validationSchema: generateSchema(user),
    onSubmit: async values => {
      if (toggleCheckBox) {
        setisCheckBoxErrorVisible(false);
        // setIsLoaderVisible(true);
        // const response = await api.post(constants.API_ENDPOINT, {
        //   first_name: values?.firstName,
        //   last_name: values?.lastName,
        //   email: values?.email,
        //   password: values?.password,
        //   password_confirmation: values.confirmPassword,
        // });
        // setIsLoaderVisible(false);
        // if (response.ok) {
        //   setIsLoaderVisible(false);
        //   console.log(response.data);
        //   navigation.reset({
        //     index: 0,
        //     routes: [{name: Navigation.LOGIN}],
        //   });
        // } else {
        //   setIsLoaderVisible(false);
        //   if (response?.data?.message?.includes(constants.EMAIL_TAKEN)) {
        //     setIsEmailErrorVisible(true);
        //   }
        //   console.log(response.data);
        // }
      } else {
        setisCheckBoxErrorVisible(true);
      }
    },
  });

  const handleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{name: Navigation.LOGIN}],
    });
  };
  const handlePrivacyPolicy = () => {
    navigation.navigate(Navigation.PRIVACY_POLICY);
  };

  const onChangeTextHandler = (value, key) => {
    setIsEmailErrorVisible(false);
    setValues(prev => ({...prev, [key]: value}));
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <AppScreen>
      <KeyboardAvoidingView behavior="height" style={styles.mainContainer}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <View style={styles.tabContainer}>
              <Tabs
                title={constants.SIGNUP}
                activeTabText={styles.activeTabText}
                activeTab={styles.activeTab}
              />
              <Tabs title={constants.LOGIN} onPress={handleLogin} />
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.signUpHeading}>{constants.SIGNUP}</Text>
              <View style={styles.formContainer}>
                <AppTextInput
                  maxLength={31}
                  placeholder={constants.FIRST_NAME_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  value={values?.firstName}
                  onChangeText={text =>
                    onChangeTextHandler(text, constants.FIRST_NAME_KEY)
                  }
                  onBlur={handleBlur(constants.FIRST_NAME_KEY)}
                  icon="user"
                />
                {touched?.firstName && errors?.firstName && (
                  <Text style={styles.errorMsg}>{errors?.firstName}</Text>
                )}
                <AppTextInput
                  maxLength={31}
                  placeholder={constants.LAST_NAME_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  value={values?.lastName}
                  onChangeText={text =>
                    onChangeTextHandler(text, constants.LAST_NAME_KEY)
                  }
                  onBlur={handleBlur(constants.LAST_NAME_KEY)}
                  icon="user"
                  errorStyles={{
                    marginTop:
                      errors?.firstName && touched?.firstName ? 0 : 19.455,
                  }}
                />
                {touched?.lastName && errors?.lastName && (
                  <Text style={styles.errorMsg}>{errors?.lastName}</Text>
                )}
                <AppTextInput
                  maxLength={50}
                  placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  KeyboardType="email-address"
                  value={values?.email}
                  onChangeText={text =>
                    onChangeTextHandler(text, constants.EMAIL_KEY)
                  }
                  onBlur={handleBlur(constants.EMAIL_KEY)}
                  errorStyles={{
                    marginTop:
                      errors?.lastName && touched?.lastName ? 0 : 19.455,
                  }}
                  icon={'mail'}
                />
                {touched?.email && errors?.email && (
                  <Text style={styles.errorMsg}>{errors?.email}</Text>
                )}
                {isEmailErrorVisible && (
                  <Text style={styles.errorMsg}>
                    {constants.EMAIL_EXISTS_ERROR}
                  </Text>
                )}
                <AppTextInput
                  placeholder={constants.PASSWORD_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  maxLength={31}
                  value={values?.password}
                  onChangeText={text =>
                    onChangeTextHandler(text, constants.PASSWORD_KEY)
                  }
                  onBlur={handleBlur(constants.PASSWORD_KEY)}
                  secureTextEntry={showPassword}
                  icon={showPassword ? 'eye' : 'eye-off'}
                  iconPress={showPasswordHandler}
                  errorStyles={{
                    marginTop: errors?.email && touched?.email ? 0 : 19.455,
                  }}
                />
                {touched?.password && errors?.password && (
                  <Text style={styles.errorMsg}>{errors?.password}</Text>
                )}
                <AppTextInput
                  placeholder={constants.CONFIRM_PASSWORD_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  maxLength={31}
                  value={values?.confirmPassword}
                  onChangeText={text =>
                    onChangeTextHandler(text, constants.CONFIRM_PASSWORD_KEY)
                  }
                  onBlur={handleBlur(constants.CONFIRM_PASSWORD_KEY)}
                  secureTextEntry={showConfirmPassword}
                  icon={showConfirmPassword ? 'eye' : 'eye-off'}
                  iconPress={showConfirmPasswordHandler}
                  errorStyles={{
                    marginTop:
                      errors?.password && touched?.password ? 0 : 19.455,
                  }}
                />
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
                    tintColors={{true: COLORS.black1}}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text style={styles.agreeText}>
                    {constants.AGREE_TEXT}{' '}
                    <Text
                      style={styles.termsText}
                      onPress={handlePrivacyPolicy}>
                      {constants.TERMS_TEXT}
                    </Text>
                  </Text>
                </View>
                {isCheckBoxErrorVisible && (
                  <Text style={styles.errorMsg}>
                    {constants.CHECKBOX_ERROR}
                  </Text>
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
                    <Text style={styles.loginText} onPress={handleLogin}>
                      {constants.LOGIN}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <Footer />
          </ScrollView>
        </TouchableWithoutFeedback>
        <Loader isVisible={isLoaderVisible} />
      </KeyboardAvoidingView>
    </AppScreen>
  );
};

export default SignupScreen;

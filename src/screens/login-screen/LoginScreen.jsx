import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {constants} from './constants';
import Tabs from '../../components/tabs/Tabs';
import FacebookLogin from '../../components/facebook-login-button/FacebookLogin';
import GoogleLogin from '../../components/google-login-button/GoogleLogin';
import {COLORS} from '../../../utils/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useFormik} from 'formik';
import AppButton from '../../components/app-button/AppButton';
import Footer from '../../components/footer/Footer';
import {generateSchema} from '../../../utils/form-validations';
import Loader from '../../components/Loader/Loader';
import api from '../../../api/baseApi';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {login} from '../../redux-toolkit/slices/AuthenticationSlice';
import AppScreen from '../../components/app-screen';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isLoggedinFailed, setIsLoggedinFailed] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = {email: '', password: ''};
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: user,
    validationSchema: generateSchema(user),
    onSubmit: async values => {
      setIsLoaderVisible(true);
      const response = await api.post(constants.API_ENDPOINT, {
        email: values?.email,
        password: values?.password,
      });
      const userInfo = {
        email: values?.email,
        password: values?.password,
      };
      dispatch(login(userInfo));
      setIsLoaderVisible(false);
      navigation.reset({
        index: 0,
        routes: [{name: Navigation.DRAWER}],
      });
      // if (response.ok) {
      //   setIsLoaderVisible(false);
      //   const accessToken = response.headers['access-token'];
      //   const cliendId = response.headers['client'];
      //   const expiry = response.headers['expiry'];
      //   await AsyncStorage.setItem('accessToken', accessToken);
      //   await AsyncStorage.setItem('cliendId', cliendId);
      //   await AsyncStorage.setItem('expiry', expiry);
      //   await AsyncStorage.setItem('uid', values?.email);

      //   console.log(response?.data?.message);
      //   navigation.reset({
      //     index: 0,
      //     routes: [{name: Navigation.DASHBOARD}],
      //   });
      // } else {
      //   setIsLoaderVisible(false);
      //   Alert.alert('', constants.LOGIN_FAIL);
      //   console.log(response.data?.message);
      // }
    },
  });
  const handleSignUp = () => {
    navigation.navigate(Navigation.SIGNUP);
  };
  const handleReset = () => {
    navigation.navigate(Navigation.RESET_PASSWORD);
  };
  const handleOnChangeText = (value, key) => {
    setValues(prev => ({...prev, [key]: value}));
  };
  return (
    <AppScreen>
      <KeyboardAvoidingView behavior="height" style={styles.mainContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollView}>
          <View style={styles.tabContainer}>
            <Tabs title={constants.SIGNUP} onPress={handleSignUp} />
            <Tabs
              title={constants.LOGIN}
              activeTabText={styles.activeTabText}
              activeTab={styles.activeTab}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.loginText}>{constants.LOGIN}</Text>
            <View style={styles.socialLoginButtonContainer}>
              <FacebookLogin />
              <GoogleLogin />
            </View>
            <View style={styles.loginForm}>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder={constants.EMAIL_ADDRESS_PLACEHOLDER}
                  placeholderTextColor={COLORS.grey3}
                  maxLength={30}
                  keyboardType="email-address"
                  value={values?.email}
                  onChangeText={text => handleOnChangeText(text, 'email')}
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
            </View>
            <Text
              style={[
                styles.forgotPassword,
                {marginTop: errors?.password && touched?.password ? 0 : 19.455},
              ]}>
              {constants.FORGOTTEN_PASSWORD}{' '}
              <Text style={styles.reset} onPress={handleReset}>
                {constants.RESET}
              </Text>{' '}
            </Text>
            <AppButton
              title={constants.LOGIN}
              isValid={!isValid}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              onPress={handleSubmit}
            />
            <Text style={styles.createAccount}>
              {constants.CREATE_ACCOUNT}
              {'  '}{' '}
              <Text style={styles.signUp} onPress={handleSignUp}>
                {constants.SIGNUP}
              </Text>
            </Text>
          </View>
          <Footer />
        </ScrollView>
        <Loader isVisible={isLoaderVisible} />
      </KeyboardAvoidingView>
    </AppScreen>
  );
};

export default LoginScreen;

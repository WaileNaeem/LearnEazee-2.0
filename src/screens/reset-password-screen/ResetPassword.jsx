import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import {constants} from './constants';
import {useFormik} from 'formik';
import {COLORS} from '../../../utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AppButton from '../../components/app-button/AppButton';
import Footer from '../../components/footer/Footer';
import AppTextInput from '../../components/text-input-field/AppTextInput';
import {generateSchema} from '../../../utils/form-validations';
import Loader from '../../components/Loader/Loader';
import api from '../../../api/baseApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const navigation = useNavigation();
  const user = {
    password: '',
    confirmPassword: '',
  };
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    useFormik({
      initialValues: user,
      validationSchema: generateSchema(user),
      onSubmit: async values => {
        setIsLoaderVisible(true);
        const accessToken = AsyncStorage.getItem('accessToken');
        const clientId = AsyncStorage.getItem('clientId');
        const expiry = AsyncStorage.getItem('expiry');
        const uid = AsyncStorage.getItem('uid');
        const headers = {
          'access-token': accessToken,
          client: clientId,
          client_id: clientId,
          expiry: expiry,
          token: accessToken,
          uid: uid,
        };

        const response = api.put(
          constants.API_ENDPOINT,
          {
            reset_password_token: accessToken,
            password: values?.password,
            password_confirmation: values?.confirmPassword,
          },
          {headers},
        );
        if (response.ok) {
          setIsLoaderVisible(false);
          console.log(response);
          navigation.navigate(Navigation.ALL_DONE);
        } else {
          setIsLoaderVisible(false);
          console.log(response);
        }
      },
    });
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled">
        <ImageBackground
          source={IMAGES.whiteBackground}
          resizeMode="cover"
          style={styles.imageBackground}>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.logoColored} />
            <Text style={styles.screenTitle}>{constants.RESET_PASSWORD}</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputField}>
              <AppTextInput
                placeholder={constants.PASSWORD_PLACEHOLDER}
                icon={showPassword ? 'eye-off' : 'eye'}
                maxLength={30}
                secureTextEntry={showPassword}
                iconPress={showPasswordHandler}
                value={values?.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
            </View>
            {touched?.password && errors?.password && (
              <Text style={styles.errorMsg}>{errors?.password}</Text>
            )}
            <View
              style={[
                styles.inputField,
                {
                  marginTop: errors?.password && touched?.password ? 0 : 19.455,
                },
              ]}>
              <AppTextInput
                placeholder={constants.CONFIRM_PASSWORD_PLACEHOLDER}
                icon={showConfirmPassword ? 'eye-off' : 'eye'}
                maxLength={30}
                secureTextEntry={showConfirmPassword}
                iconPress={showConfirmPasswordHandler}
                value={values?.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
              />
            </View>
            {touched?.confirmPassword && errors?.confirmPassword && (
              <Text style={styles.errorMsg}>{errors?.confirmPassword}</Text>
            )}
          </View>
          <View
            style={[
              styles.buttonContainer,
              {
                marginTop:
                  errors?.confirmPassword && touched?.confirmPassword
                    ? 0
                    : 19.455,
              },
            ]}>
            <AppButton
              title={constants.RESET}
              buttonStyle={styles.appButtonContainer}
              textStyle={styles.appButtonTextStyle}
              onPress={handleSubmit}
            />
          </View>
          <Footer />
        </ImageBackground>
      </ScrollView>
      <Loader isVisible={isLoaderVisible} />
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;

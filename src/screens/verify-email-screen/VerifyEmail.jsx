import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../../utils/images-path';
import styles from './styles';
import {constants} from './constants';
import {useFormik} from 'formik';
import {COLORS} from '../../../utils/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AppButton from '../../components/app-button/AppButton';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/Loader/Loader';
import {generateSchema} from '../../../utils/form-validations';
import api from '../../../api/baseApi';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';

const VerifyEmail = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const user = {email: ''};

  const {errors, touched, values, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: user,
      validationSchema: generateSchema(user),
      onSubmit: async values => {
        setIsLoaderVisible(true);
        const response = await api.post(constants.ENDPOINT, {
          email: values?.email,
        });
        if (response.ok) {
          setIsLoaderVisible(false);
          setIsModalVisible(true);
          console.log(response.data.message);
        } else {
          setIsLoaderVisible(false);
          console.log(response.data.message);
        }
        setIsModalVisible(false);
      },
    });
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={IMAGES.whiteBackground}
          resizeMode="cover"
          style={styles.imageBackground}>
          <Image source={IMAGES.logoColored} style={styles.logo} />
          <Text style={styles.verifyText}>{constants.VERIFY_SCREEN}</Text>
          <View style={styles.inputFieldContainer}>
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
          <AppButton
            title={constants.BUTTON_TEXT}
            buttonStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            onPress={handleSubmit}
          />
          <View style={styles.footerContainer}>
            <Footer />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <Loader isVisible={isLoaderVisible} />
      {isModalVisible &&
        Alert.alert(constants.NOTIFICATION, constants.POPUP_TEXT, [
          {
            text: 'OK',
            onPress: () => navigation.navigate(Navigation.LOGIN),
          },
        ])}
    </KeyboardAvoidingView>
  );
};

export default VerifyEmail;

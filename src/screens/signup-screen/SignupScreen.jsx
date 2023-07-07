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
import Tabs from '../../components/login-signup-tabs/Tabs';
import {COLORS} from '../../../utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CheckBox from '@react-native-community/checkbox';

const SignupScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainer}>
            <Text style={styles.signUpHeading}>Sign Up</Text>
            {/* <===============SIGNUP FORM ======================> */}
            <View style={styles.formContainer}>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="First Name"
                  placeholderTextColor={COLORS.grey3}
                />
                <FeatherIcon name="user" size={20} color={COLORS.black1} />
              </View>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Last Name"
                  placeholderTextColor={COLORS.grey3}
                />
                <FeatherIcon name="user" size={20} color={COLORS.black1} />
              </View>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Email"
                  placeholderTextColor={COLORS.grey3}
                />
                <Fontisto name="email" size={20} color={COLORS.black1} />
              </View>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Password"
                  placeholderTextColor={COLORS.grey3}
                />
                <FeatherIcon name="eye" size={20} color={COLORS.black1} />
              </View>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Confirm Password"
                  placeholderTextColor={COLORS.grey3}
                />
                <FeatherIcon name="eye-off" size={20} color={COLORS.black1} />
              </View>
              <View style={styles.checkboxContainer}></View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignupScreen;

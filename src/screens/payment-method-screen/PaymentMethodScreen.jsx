import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {constants} from './constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AppTextInput from '../../components/text-input-field/AppTextInput';
import PaymentMethods from '../../components/payment-methods/PaymentMethods';
import {COLORS} from '../../../utils/colors';
import AppButton from '../../components/app-button/AppButton';
import {Navigation} from '../../navigation/NavigationConstants';

const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  const handleContinue = () => {
    navigation.navigate(Navigation.CART);
  };

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
          maxLength={16}
          placeholder={constants.CARD_HOLDER_NAME_PLACEHOLDER}
          placeholderTextColor={COLORS.grey3}
        />
        <View style={styles.textInputFieldContainer}>
          <AppTextInput
            placeholder={constants.CARD_NUMBER_PLACEHOLDER}
            placeholderTextColor={COLORS.grey3}
            textInputStyle={styles.cardNumberStyle}
          />
          <AppTextInput
            placeholder={constants.CVV_PLACEHOLDER}
            placeholderTextColor={COLORS.grey3}
            textInputStyle={styles.cvvStyle}
          />
          <AppTextInput
            placeholder={constants.EXPIRY_PLACEHOLDER}
            placeholderTextColor={COLORS.grey3}
            textInputStyle={styles.expiryStyle}
          />
        </View>
      </ScrollView>
      <AppButton
        title={constants.CONTINUE}
        buttonStyle={styles.continueButton}
        textStyle={styles.buttonText}
        onPress={handleContinue}
      />
    </AppScreen>
  );
};

export default PaymentMethodScreen;

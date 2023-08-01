import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import {constants} from './constants';
import AppButton from '../../components/app-button/AppButton';
import {Navigation} from '../../navigation/NavigationConstants';
import {useNavigation} from '@react-navigation/native';

const SplashOne = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate(Navigation.LOGIN);
  };
  return (
    <View style={styles.mainContainer}>
      <Image source={IMAGES.bookImage} style={styles.bookImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>
          {constants.WELCOME}
          {'\n'}
          {constants.LEARN_EAZEE}
        </Text>
        <AppButton
          title={constants.BUTTON_TEXT}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          onPress={handleNavigation}
        />
      </View>
    </View>
  );
};

export default SplashOne;

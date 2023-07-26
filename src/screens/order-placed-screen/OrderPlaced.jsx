import {
  BackHandler,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {IMAGES} from '../../../utils/images-path';
import styles from './styles';
import AppButton from '../../components/app-button/AppButton';
import {constants} from './constants';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';

const OrderPlaced = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate(Navigation.DASHBOARD);
  };
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  useEffect(() => {
    const backAction = () => {
      navigation.replace(Navigation.DASHBOARD);
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <AppScreen>
      <ImageBackground
        source={IMAGES.whiteBackground}
        resizeMode="cover"
        style={styles.imageBackground}>
        <Header onMenuPress={onMenuPress} />
        <View style={styles.mainContainer}>
          <Image source={IMAGES.allDoneLogo} />
          <Text style={styles.congratsHeading}>
            {constants.CONGRATULATIONS}
          </Text>
          <Text style={styles.congratulationsText}>
            {constants.ORDER_PLACED}
          </Text>
          <AppButton
            title={constants.BACK_TO_HOME}
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonContainer}
            onPress={handleButtonPress}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
};

export default OrderPlaced;

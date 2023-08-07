import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import AppScreen from '../../components/app-screen';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';
import {constants} from './constants';
import AppButton from '../../components/app-button/AppButton';

const CongratulationScreen = () => {
  const navigation = useNavigation();
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  return (
    <AppScreen>
      <ImageBackground
        source={IMAGES.whiteBackground}
        resizeMode="cover"
        style={styles.imageBackground}>
        <Header onMenuPress={onMenuPress} />
        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <Image source={IMAGES.allDoneLogo} style={styles.image} />
            <Text style={styles.congratulationText}>
              {constants.CONGRATULATIONS}
            </Text>
            <Text style={styles.completionText}>
              {constants.BOOK_COMPLETED}
            </Text>
            <AppButton color={'pink'} title={constants.BACK} />
          </View>
        </View>
      </ImageBackground>
    </AppScreen>
  );
};

export default CongratulationScreen;

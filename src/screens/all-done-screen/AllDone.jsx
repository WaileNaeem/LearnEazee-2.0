import {View, Text, Image} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {IMAGES} from '../../../utils/images-path';
import styles from './styles';
import {constants} from './constants';
import AppButton from '../../components/app-button/AppButton';
import Footer from '../../components/footer/Footer';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../navigation/NavigationConstants';

const AllDone = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.reset({index: 0, routes: [{name: Navigation.LOGIN}]});
  };
  return (
    <ImageBackground
      source={IMAGES.whiteBackground}
      resizeMode="cover"
      style={styles.imageBackground}>
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Image source={IMAGES.allDoneLogo} />
          <Text style={styles.allDoneText}>{constants.ALL_DONE}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.passwordChangeText}>
              {constants.PASSWORD_CHANGED}
            </Text>
          </View>
          <AppButton
            title={constants.HOME}
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonContainer}
            onPress={handlePress}
          />
        </View>
      </View>
      <Footer />
    </ImageBackground>
  );
};

export default AllDone;

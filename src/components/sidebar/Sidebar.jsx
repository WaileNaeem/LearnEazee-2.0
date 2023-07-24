import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import AppButton from '../app-button/AppButton';
import Footer from '../footer/Footer';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <TouchableWithoutFeedback onPress={handleDrawer}>
          <View style={styles.crossImageContainer}>
            <Image source={IMAGES.cross} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.userInfoContainer}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
          <Text style={styles.userName}>Shwary</Text>
          <Text style={styles.userEmail}>Shwary@gmail.com</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title={'Sign Out'}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
          />
        </View>
        <Footer
          textStyle={styles.footerText}
          containerStyle={styles.footerContainer}
        />
      </View>
    </View>
  );
};

export default Sidebar;

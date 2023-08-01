import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import AppButton from '../app-button/AppButton';
import Footer from '../footer/Footer';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux-toolkit/slices/AuthenticationSlice';
import {Navigation} from '../../navigation/NavigationConstants';

const Sidebar = () => {
  const user = useSelector(state => state.authentication);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate(Navigation.LOGIN);
  };
  const handleSignIn = () => {
    navigation.navigate(Navigation.LOGIN);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <TouchableWithoutFeedback onPress={handleDrawer}>
          <View style={styles.crossImageContainer}>
            <Image source={IMAGES.cross} />
          </View>
        </TouchableWithoutFeedback>
        {user?.isLoggedIn && (
          <View style={styles.userInfoContainer}>
            <Image source={IMAGES.userImage} style={styles.userImage} />
            {/* <Text style={styles.userName}>Shwary</Text> */}
            <Text style={styles.userEmail}>{user?.user?.email}</Text>
          </View>
        )}
        {user.isLoggedIn ? (
          <View style={styles.buttonContainer}>
            <AppButton
              title={'Sign Out'}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              onPress={handleLogout}
            />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <AppButton
              title={'Sign In'}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              onPress={handleSignIn}
            />
          </View>
        )}
        <Footer
          textStyle={styles.footerText}
          containerStyle={styles.footerContainer}
        />
      </View>
    </View>
  );
};

export default Sidebar;

import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../utils/images-path';
import styles from './styles';

const GoogleLogin = () => {
  return (
    <Pressable style={styles.socialLoginButton}>
      <Image resizeMode="contain" source={IMAGES.googleIcon} />
      <Text style={styles.socialLoginText}>Google</Text>
    </Pressable>
  );
};

export default GoogleLogin;

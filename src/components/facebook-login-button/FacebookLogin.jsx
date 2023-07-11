import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../utils/images-path';
import styles from './styles';

const FacebookLogin = () => {
  return (
    <Pressable style={styles.socialLoginButton}>
      <Image resizeMode="contain" source={IMAGES.faceBookIcon} />
      <Text style={styles.socialLoginText}>facebook</Text>
    </Pressable>
  );
};

export default FacebookLogin;

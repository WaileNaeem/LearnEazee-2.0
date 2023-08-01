import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

import {IMAGES} from '../../../utils/images-path';
import styles from './styles';
import {constant} from './constants';
import {COLORS} from '../../../utils/colors';
import {Navigation} from '../../navigation/NavigationConstants';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  // const [percentage, setPercentage] = useState(0);
  // const [progress, setProgress] = useState(0);
  // const navigation = useNavigation();

  // useEffect(() => {
  //   let percentageValue = 0;
  //   let progressIncrement = 0;
  //   setTimeout(() => {
  //     const interval = setInterval(() => {
  //       percentageValue += 10;
  //       progressIncrement += 0.1;
  //       if (percentageValue >= 100 && progressIncrement >= 1) {
  //         (percentageValue = 100), (progressIncrement = 1);
  //         clearInterval(interval);
  //         navigation.navigate(Navigation.SPLASH_ONE);
  //       }
  //       setPercentage(percentageValue);
  //       setProgress(progressIncrement);
  //     }, 300);
  //   }, 3000);
  // }, []);
  const user = useSelector(state => state.authentication);
  // console.log('splash isLoggedIn', user.isLoggedIn);
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();
  let interval;

  const clearIntervalHandler = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    let percentageValue = 0;
    let progressIncrement = 0;

    interval = setInterval(() => {
      percentageValue += 10;
      progressIncrement += 0.1;

      if (percentageValue >= 100 && progressIncrement >= 1) {
        percentageValue = 100;
        progressIncrement = 1;
        clearIntervalHandler();
        if (user.isLoggedIn) {
          navigation.reset({
            index: 0,
            routes: [{name: Navigation.DRAWER}],
          });
        } else {
          navigation.replace(Navigation.SPLASH_ONE);
        }
      }

      setPercentage(percentageValue);
      setProgress(progressIncrement);
    }, 300);

    return clearIntervalHandler;
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      source={IMAGES.splashBackground}
      resizeMode="cover">
      <Image source={IMAGES.whiteLogo} />
      <Text style={styles.text}>{constant.TEXT}</Text>
      <View style={styles.progressBarContainer}>
        <Text style={styles.percentageText}>{percentage}%</Text>
        <Progress.Bar
          animated={true}
          color={COLORS.white}
          borderWidth={0.1}
          width={230}
          borderColor="none"
          progress={progress}
        />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

import React from 'react';
import styles from './styles';
import SliderList from '../slider-list/SliderList';
import AppCard from '../../card/app-card';

const Slider = () => {
  return (
    <AppCard style={styles.sliderContainer}>
      <SliderList />
    </AppCard>
  );
};

export default Slider;

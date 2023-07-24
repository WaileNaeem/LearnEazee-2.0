import {Image, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';

const PaymentMethods = () => {
  const [selectedId, setSetselectedId] = useState(1);
  const handleTabPress = id => {
    setSetselectedId(id);
  };
  const paymentMethod = [
    {
      id: 1,
      image: IMAGES.paypalLogo,
    },
    {
      id: 2,
      image: IMAGES.MasterCardLogo,
    },
    {
      id: 3,
      image: IMAGES.ViasLogo,
    },
    {
      id: 4,
      image: IMAGES.AmericanExpressLogo,
    },
    {
      id: 5,
      image: IMAGES.DiscoverLogo,
    },
  ];
  return (
    <>
      {paymentMethod.map(payment => (
        <Pressable key={payment.id} onPress={() => handleTabPress(payment.id)}>
          <View
            style={[
              styles.mainContainer,
              selectedId === payment.id && styles.activeTab,
            ]}>
            <Image
              source={payment.image}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </Pressable>
      ))}
    </>
  );
};

export default PaymentMethods;

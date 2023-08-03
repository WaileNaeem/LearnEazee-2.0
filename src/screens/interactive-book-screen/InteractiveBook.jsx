import React from 'react';
import AppScreen from '../../components/app-screen';
import {Button, Card, Text} from 'react-native-paper';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../utils/colors';

const InteractiveBook = () => {
  return (
    <AppScreen>
      <Card style={styles.contentContainer}>
        <Card.Cover
          source={IMAGES.birdImage}
          resizeMode="cover"
          style={styles.image}
        />
        <Card.Content style={styles.cardContent}>
          <Text variant="titleLarge" style={styles.title}>
            A lineage of Grace
          </Text>
          <Text variant="bodyMedium" style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna dolore magna ut
            labore et doloreut labore et dolore magna ut labore et dolore magna
            ut labore et dolore magna
          </Text>
          <Text variant="bodyMedium" style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna dolore magna ut
            labore et doloreut labore et dolore magna ut labore et dolore magna
            ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna dolore magna ut labore et doloreut labore et dolore
            magna ut labore et dolore magna ut labore et dolore magna
          </Text>
        </Card.Content>
        <Card.Actions style={{alignSelf: 'center'}}>
          <Button>
            <Icon name="arrowleft" size={20} color={COLORS.black1} />
          </Button>
          <Button style={{backgroundColor: COLORS.pink3}}>
            <Icon name="arrowright" size={20} />
          </Button>
        </Card.Actions>
      </Card>
    </AppScreen>
  );
};

export default InteractiveBook;

import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import AppScreen from '../../components/app-screen';
import {
  SearchBar,
  Slider,
  Avatar,
  Badge,
  Button,
  Icon,
  ButtonGroup,
  Card,
  Text,
  CheckBox,
  LinearProgress,
  ListItem,
  PricingCard,
  Tab,
} from '@rneui/themed';
import styles from './styles';
import {COLORS} from '../../../utils/colors';

const TestScreen = () => {
  // const [searchText, setSearchText] = useState('');
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  // const handleSearch = text => {
  //   setSearchText(text);
  // };
  return (
    <AppScreen>
      {/* <ScrollView contentContainerStyle={{flex: 1}}>
        <Text>TestScreen</Text>
        <View style={styles.view}>
          <SearchBar
            placeholder="Type here..."
            onChangeText={text => handleSearch(text)}
            value={searchText}
            style={styles.search}
            lightTheme
          />
        </View>
        <Avatar
          size={'large'}
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
        />
        <Badge value="3" status="error" />
        <Badge status="primary" />
        <Button color="secondary" radius={'lg'}>
          Secondary <Icon name="save" color="white" />
        </Button>
        <Button title="Solid" type="solid" loading />
        <ButtonGroup
          buttons={['SIMPLE', 'BUTTON', 'GROUP']}
          selectedIndex={selectedIndex}
          disabled={false}
          onPress={value => {
            setSelectedIndex(value);
          }}
          containerStyle={{marginBottom: 20}}
        />
        <ButtonGroup
          buttons={['Multiple', 'Select', 'Button', 'Group']}
          selectMultiple
          selectedIndexes={selectedIndexes}
          onPress={value => {
            setSelectedIndexes(value);
          }}
          containerStyle={{marginBottom: 20}}
        />
        <ButtonGroup
          buttonStyle={{padding: 10}}
          selectedButtonStyle={{backgroundColor: '#e2e2e2'}}
          buttons={[
            <Icon name="format-align-left" />,
            <Icon name="format-align-center" />,
            <Icon name="format-align-right" />,
          ]}
          selectedIndex={selectedIndex}
          onPress={setSelectedIndex}
        />
        <Card>
          <Text>Word of the Day</Text>
          <Text h1>be-nev-o=lent</Text>
          <Text>adjective</Text>
          <Text>
            well meaning and kindly.
            {'"a benevolent smile"'}
          </Text>
          <Button size="sm" type="clear">
            Learn More
          </Button>
        </Card>
      </ScrollView> */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card containerStyle={styles.card}>
          <Avatar
            size={100}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            containerStyle={styles.avatar}
          />
          <Text style={styles.text} h3>
            Dummy User
          </Text>
          <Card.Divider />
        </Card>
        {/* <LinearProgress style={{marginVertical: 10}} color="red" />
        <LinearProgress style={{marginVertical: 10}} /> */}
        <ListItem>
          <Icon name="inbox" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Inbox</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon
            name="trash-can-outline"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>Trash</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem.Swipeable
          leftContent={reset => (
            <Button
              title="Info"
              onPress={() => reset()}
              icon={{name: 'info', color: 'white'}}
              buttonStyle={{minHeight: '100%'}}
            />
          )}
          rightContent={reset => (
            <Button
              title="Delete"
              onPress={() => reset()}
              icon={{name: 'delete', color: 'white'}}
              buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
            />
          )}>
          <Icon name="delete" />
          <ListItem.Content>
            <ListItem.Title>Hello Swiper</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem.Swipeable>
      </ScrollView>
    </AppScreen>
  );
};

export default TestScreen;

import {View} from 'react-native';
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
} from '@rneui/themed';
import styles from './styles';

const TestScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  const handleSearch = text => {
    setSearchText(text);
  };
  return (
    <AppScreen>
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
    </AppScreen>
  );
};

export default TestScreen;

import {ScrollView, View} from 'react-native';
import React from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {Searchbar} from 'react-native-paper';
import {Surface, Text} from 'react-native-paper';
import styles from './styles';
import {DataTable} from 'react-native-paper';
import {Avatar, Button, Card} from 'react-native-paper';
import {IMAGES} from '../../../utils/images-path';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const ReaderDashboard = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <AppScreen>
      <Header title={'Reader Dashboard'} />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.detailsContainer}>
          <View style={styles.adjacentContainer}>
            <Surface style={styles.surface} elevation={4}>
              <Text>Surface</Text>
            </Surface>
            <Surface style={styles.surface} elevation={4}>
              <Text>Surface</Text>
            </Surface>
          </View>
          <View style={styles.adjacentContainer}>
            <Surface style={styles.surface} elevation={4}>
              <Text>Surface</Text>
            </Surface>
            <Surface style={styles.surface} elevation={4}>
              <Text>Surface</Text>
            </Surface>
          </View>
        </View>
        <View style={styles.library}>
          <Text variant="displaySmall">Library</Text>
          <DataTable.Row>
            <DataTable.Cell numeric>All Book</DataTable.Cell>
            <DataTable.Cell numeric>Purchase</DataTable.Cell>
            <DataTable.Cell numeric>Trash</DataTable.Cell>
          </DataTable.Row>
          <Card>
            <Card.Cover source={IMAGES.book1} style={{width: 50, height: 50}} />
          </Card>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default ReaderDashboard;

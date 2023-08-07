import {ScrollView, View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header/Header';
import {Searchbar} from 'react-native-paper';
import {
  Surface,
  DataTable,
  Avatar,
  Button,
  Card,
  Dialog,
} from 'react-native-paper';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import ReaderDetailsCard from '../../components/reader-details-card-component/ReaderDetailsCard';
import {COLORS} from '../../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Popup from '../../components/popup/Popup';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const ReaderDashboard = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [ispopupVisible, setIspopupVisible] = useState(false);
  const [ispopupButtonVisible, setIspopupButtonVisible] = useState(false);

  const onChangeSearch = query => setSearchQuery(query);

  const handlePopUp = () => {
    setIspopupVisible(!ispopupVisible);
  };
  const handleLongPress = () => {
    setIspopupButtonVisible(true);
  };
  const handlePress = () => {
    setIspopupButtonVisible(false);
    if (ispopupVisible) {
      setIspopupVisible(false);
    }
  };

  return (
    <AppScreen>
      <Header title={'Reader Dashboard'} />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        mode="view"
        style={styles.searchBar}
      />

      <ReaderDetailsCard />
      <View style={styles.library}>
        <Text style={styles.libraryTitle}>Library</Text>
        <DataTable.Row>
          <DataTable.Cell numeric>All Book</DataTable.Cell>
          <DataTable.Cell numeric>Purchase</DataTable.Cell>
          <DataTable.Cell numeric>Trash</DataTable.Cell>
        </DataTable.Row>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Card
            style={styles.cardContainer}
            onLongPress={handleLongPress}
            onPress={handlePress}>
            {ispopupButtonVisible && (
              <Icon
                name="ellipsis-horizontal-circle-sharp"
                size={20}
                color={COLORS.pink3}
                style={styles.popupButton}
                onPress={handlePopUp}
              />
            )}
            {ispopupVisible && <Popup />}
            <Card.Cover
              source={IMAGES.book1}
              resizeMode="stretch"
              style={styles.bookImage}
            />
            <Card.Content>
              <Text style={styles.bookTitle}>The Family Across the street</Text>
            </Card.Content>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Card.Actions>
                <Image source={IMAGES.cartImage} />
              </Card.Actions>
              <Card.Actions>
                <Text style={{color: COLORS.black1}}>Free</Text>
              </Card.Actions>
            </View>
          </Card>
        </View>
      </View>
    </AppScreen>
  );
};

export default ReaderDashboard;

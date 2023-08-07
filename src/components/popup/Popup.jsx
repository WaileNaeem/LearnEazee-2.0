import {Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../utils/colors';
import InviteUser from '../../screens/invite-user-screen/InviteUser';

const Popup = () => {
  const [setselectedTab, setSetselectedTab] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const tabs = [
    {
      id: 0,
      title: 'View',
      name: 'eye',
    },
    {
      id: 1,
      title: 'Invite User',
      name: 'users',
    },
    {
      id: 2,
      title: 'Trash',
      name: 'trash-2',
    },
  ];
  const toggleModal = () => {
    setIsModalVisible(true);
    console.log(isModalVisible);
  };

  const handleActiveTab = id => {
    setSetselectedTab(id);
    console.log(id);
  };
  return (
    <FlatList
      style={styles.popup}
      contentContainerStyle={styles.popupStyle}
      data={tabs}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <>
          <TouchableOpacity
            style={styles.contentStyle}
            onPress={() => {
              handleActiveTab(item.id);
              item.id == 1 && toggleModal();
            }}>
            <Icon
              name={item.name}
              size={7}
              color={item.id === setselectedTab ? COLORS.pink3 : COLORS.black1}
            />
            <Text
              style={[
                styles.text,
                item.id === setselectedTab
                  ? {color: COLORS.pink3}
                  : {color: COLORS.black1},
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
          <InviteUser
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
          />
        </>
      )}
    />
  );
};

export default Popup;

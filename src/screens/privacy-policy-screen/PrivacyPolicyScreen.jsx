import {View, Text, ScrollView, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const PrivacyPolicyScreen = () => {
  const tabs = [
    {
      id: 1,
      name: 'Privacy Policy',
    },
    {
      id: 2,
      name: 'Cookies Policy',
    },
    {
      id: 3,
      name: 'Terms & Conditions',
    },
    {
      id: 4,
      name: 'Intellectual Property',
    },
  ];
  const [selectedTab, setSelectedTab] = useState(3);
  const handletabPress = id => {
    setSelectedTab(id);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flatlistContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={tabs}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={() => handletabPress(item.id)}>
              <View
                style={[
                  styles.tabContainer,
                  selectedTab === item.id && styles.activeTab,
                ]}>
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === item.id && styles.activeTabText,
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
      <View style={styles.contentContainer}></View>
    </View>
  );
};

export default PrivacyPolicyScreen;

import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import PrivacyPolicies from '../../components/policies/privacy-policy';
import CookiesPolicy from '../../components/policies/cookies-policy';
import TermAndConditions from '../../components/policies/terms-and-conditions';
import IntellectualProperty from '../../components/policies/intellectual-property';

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
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {selectedTab === 1 && <PrivacyPolicies />}
          {selectedTab === 2 && <CookiesPolicy />}
          {selectedTab === 3 && <TermAndConditions />}
          {selectedTab === 4 && <IntellectualProperty />}
        </ScrollView>
      </View>
    </View>
  );
};

export default PrivacyPolicyScreen;

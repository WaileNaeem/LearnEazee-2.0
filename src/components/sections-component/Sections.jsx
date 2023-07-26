import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Sections = () => {
  const [selectedId, setSetselectedId] = useState(1);
  const sections = [
    {
      id: 1,
      name: 'Categories',
    },
    {
      id: 2,
      name: 'New Arrival',
    },
    {
      id: 3,
      name: 'Popular Books',
    },
  ];
  const handleTabPress = id => {
    setSetselectedId(id);
  };
  return (
    <View style={styles.sectionsContainer}>
      {sections.map(section => (
        <TouchableWithoutFeedback
          key={section.id}
          onPress={() => handleTabPress(section.id)}>
          <View
            style={[styles.tab, selectedId === section.id && styles.activeTab]}>
            <Text
              style={[
                styles.sectionText,
                selectedId === section.id && styles.activeSection,
              ]}>
              {section.name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default Sections;

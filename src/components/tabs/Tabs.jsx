import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {FONTS} from '../../../utils/font-family';
import {COLORS} from '../../../utils/colors';

const Tabs = ({title, activeTab, onPress, activeTabText}) => {
  return (
    <View style={styles.tab}>
      <Pressable onPress={onPress} style={[styles.pressable, activeTab]}>
        <Text style={[styles.tabText, activeTabText]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontFamily: FONTS.Avenir,
    fontWeight: '400',
    fontSize: 20,
    color: COLORS.black1,
  },
  pressable: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.white1,
  },
});

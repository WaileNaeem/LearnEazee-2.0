import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';

const CategoriesList = ({item, onItemPress, isActive}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemPress(item.id, item.name)}>
      <View style={[styles.tabContainer, isActive && styles.activeCategoryTab]}>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {item.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  tabContainer: {
    borderColor: COLORS.pink2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
    marginRight: 15,
  },
  tabText: {
    color: COLORS.grey5,
    fontFamily: FONTS.Avenir,
    fontSize: 12,
    fontWeight: '400',
  },
  activeCategoryTab: {
    backgroundColor: COLORS.pink2,
  },
  activeTabText: {
    color: COLORS.white,
  },
});

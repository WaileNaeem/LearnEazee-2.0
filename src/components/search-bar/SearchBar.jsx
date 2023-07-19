import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../utils/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBar = ({searchHandler}) => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarIcon}>
        <FeatherIcon name="search" size={20} color={COLORS.black1} />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          placeholder="Search"
          placeholderTextColor={COLORS.black1}
          onChangeText={text => searchHandler(text)}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarIcon: {
    width: '10%',
    alignItems: 'flex-end',
  },
  searchBar: {
    width: '90%',
  },
  searchBarText: {
    color: COLORS.black1,
  },
});

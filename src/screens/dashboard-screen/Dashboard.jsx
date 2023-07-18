import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../../utils/images-path';
import {constants} from './constants';
import Header from '../../components/header/Header';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../utils/colors';
import SearchBar from '../../components/search-bar/SearchBar';
import {categories} from '../../data/categories';
import CategoriesList from '../../components/categories-list/CategoriesList';
import {books} from '../../data/books';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabPress = id => {
    setSelectedTab(id);
  };
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.contentContainer}>
          <Header title={constants.SCREEN_NAME} />
          <SearchBar />
          {/* <View style={styles.sliderContainer}></View> */}
          <View style={styles.sectionsContainer}>
            <View style={styles.activeTab}>
              <Text style={[styles.sectionText, styles.activeSection]}>
                {constants.CATEGORIES}
              </Text>
            </View>
            <View>
              <Text style={styles.sectionText}>{constants.NEW_ARRIVAL}</Text>
            </View>
            <View>
              <Text style={styles.sectionText}>{constants.POPULAR_BOOKS}</Text>
            </View>
          </View>
          <View style={styles.categoriesSectionContainer}>
            <Text style={styles.categoriesHeading}>{constants.CATEGORIES}</Text>
            <View style={styles.viewMoreContainer}>
              <Text style={styles.viewMoreText}>{constants.VIEW_MORE}</Text>
              <FeatherIcon name="arrow-right" size={15} color={COLORS.pink3} />
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={category => category.id}
              renderItem={({item}) => (
                <CategoriesList
                  item={item}
                  isActive={item.id == selectedTab ? true : false}
                  onItemPress={handleTabPress}
                />
              )}
            />
          </View>
          <ScrollView>
            <View style={styles.booksContainer}>
              {books.slice(0, 8).map(book => (
                <View key={book.id} style={styles.singlebookContainer}>
                  <Image source={IMAGES.book1} />
                  <Text style={styles.bookName}>{book.name}</Text>
                  <View style={styles.booksDetails}>
                    <Image source={IMAGES.cartImage} />
                    <Text style={styles.bookStatus}>{book.content_type}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

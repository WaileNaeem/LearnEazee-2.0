import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {constants} from './constants';
import Header from '../../components/header/Header';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../utils/colors';
import SearchBar from '../../components/search-bar/SearchBar';
import {categories} from '../../data/categories';
import CategoriesList from '../../components/categories-list/CategoriesList';
import {books} from '../../data/books';
import Book from '../../components/book-component/Book';
import Slider from '../../components/slider/Slider';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleTabPress = (id, categoryName) => {
    setSelectedTab(id);
    if (id === 1) {
      setShowFilteredData(false);
    } else {
      const filter = books.filter(item => item.category === categoryName);
      setFilteredBooks(filter);
      setShowFilteredData(true);
    }
  };
  const handleSearch = text => {
    const filter = books.filter(item =>
      item.name.toString().toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredBooks(filter);
    setShowFilteredData(true);
  };
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.contentContainer}>
          <Header title={constants.SCREEN_NAME} />
          <SearchBar searchHandler={handleSearch} />
          <Slider />
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
              {showFilteredData ? (
                filteredBooks.length == 0 ? (
                  <Text style={styles.noBookError}>
                    {constants.NO_BOOK_FOUND}
                  </Text>
                ) : (
                  filteredBooks.map(book => <Book book={book} key={book.id} />)
                )
              ) : (
                books
                  .slice(0, 8)
                  .map(book => <Book book={book} key={book.id} />)
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

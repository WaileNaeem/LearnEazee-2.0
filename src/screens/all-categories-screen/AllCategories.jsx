import {FlatList, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/header/Header';
import {constants} from './constants';
import {categories} from '../../data/categories';
import CategoriesList from '../../components/categories-list/CategoriesList';
import Book from '../../components/book-component/Book';
import {books} from '../../data/books';
import AppScreen from '../../components/app-screen';

const AllCategories = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showFilteredData, setShowFilteredData] = useState(false);
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
  return (
    <AppScreen>
      <Header title={constants.SCREEN_TITLE} />
      <View style={styles.contentContainer}>
        <Text style={styles.allCategoriesText}>{constants.ALL_CATEGORIES}</Text>
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
        <ScrollView showsVerticalScrollIndicator={false}>
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
              books.map(book => <Book book={book} key={book.id} />)
            )}
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default AllCategories;

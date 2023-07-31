import {FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import SliderListItem from '../slider-list-item/SliderListItem';
import {books} from '../../../data/books';

const SliderList = () => {
  const listRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  //   if (currentIndex > 0) {
  //     flatListRef.current.scrollToIndex({
  //       index: currentIndex - 1,
  //       animated: true,
  //       viewPosition: 0.5,
  //     });
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

  // const handleArrowRight = () => {
  //   if (currentIndex === books.length - 1) {
  //     flatListRef.current.scrollToIndex({
  //       index: 0,
  //       animated: true,
  //       viewPosition: 0.5,
  //     });
  //     setCurrentIndex(0);
  //   } else {
  //     flatListRef.current.scrollToIndex({
  //       index: currentIndex + 1,
  //       animated: true,
  //       viewPosition: 0.5,
  //     });
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };
  return (
    <FlatList
      ref={listRef}
      data={books}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={item => item.id}
      pagingEnabled
      scrollEnabled
      snapToAlignment="center"
      onMomentumScrollEnd={event => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.floor(offsetY / ITEM_HEIGHT);
        setCurrentIndex(index);
      }}
      renderItem={({item, index}) => (
        <SliderListItem
          item={item}
          flatListRef={listRef}
          itemIndex={index}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          lastIndex={books.length - 1}
        />
      )}
    />
  );
};

export default SliderList;

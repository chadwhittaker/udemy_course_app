import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const ListItems = ({ places, onItemSelected }) => {

  return <FlatList style={styles.listContainer} data={places} keyExtractor={(item, index) => index.toString()} renderItem={(info) => (
    <TouchableOpacity onPress={() => onItemSelected(info.item.key)}>
      <View style={styles.listItem}>
        <Image source={info.item.placeImage} style={styles.placeImage} resizeMode="contain"/>
        <Text>{info.item.placeName}</Text>
      </View>
    </TouchableOpacity>
  )}/>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  }
});

export default ListItems;
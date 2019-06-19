/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'; 

import AddItem from './src/components/AddItem';
import ListItems from './src/components/ListItems';
import PlaceDetail from './src/components/PlaceDetail';
import { deletePlace, selectPlace, unselectPlace } from './src/store/actions/index'

const App = (props) => {
  // state declaration
  const [place, setPlace] = useState({ 
    key: null, 
    placeName: '',
    placeImage: null,
  });
  // const [places, setPlaces] = useState([]);
  // const [selectedPlace, setSelectedPlace] = useState(null)

  const onItemSelected = (key) => {
    props.onSelectPlace(key);
    // setSelectedPlace(places.find(place => key === place.key))
  }

  const onItemDelete = () => {
    props.onDeletePlace();
    // const newPlaces = places.filter(place => place.key !== selectedPlace.key)
    // setPlaces(newPlaces)
    // setSelectedPlace(null)
  }

  const onModalClose = () => {
    props.onUnselectPlace();
    // setSelectedPlace(null)
  }

  return (
    <View style={styles.container}>
      <PlaceDetail 
        // selectedPlace={selectedPlace} 
        onItemDelete={onItemDelete} 
        onModalClose={onModalClose}
      />
      <AddItem
        place={place}
        setPlace={setPlace}
        // places={places}
        // setPlaces={setPlaces}
      />
      <ListItems 
        // places={places} 
        onItemSelected={onItemSelected} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onUnselectPlace: () => dispatch(unselectPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux'; 

import { addPlace } from '../store/actions/index'
// import imageName from '../assets/IMG_4635.jpg'

const AddItem = ({place, setPlace, onAddPlace}) => {
  // helper methods
  const placeNameChangeHandler = val => {
    setPlace({ placeName: val });
  };

  const placeSubmitHandler = () => {
    if (place.placeName.trim() === '') return;

    // add new place to the places array
    onAddPlace(place.placeName)
    // setPlaces([...places, { key: Math.random().toString(), placeName: place.placeName, placeImage: imageName }]);
    
    // clear out place
    setPlace({ key: null, placeName: '', placeImage: null });
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="Input place..."
        value={place.placeName}
        onChangeText={placeNameChangeHandler}
      />
      <Button
        style={styles.placeButton}
        title="Add"
        onPress={placeSubmitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
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
    onAddPlace: (name) => dispatch(addPlace(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);

import React from 'react';
import { StyleSheet, Modal, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'; 

import Icon from 'react-native-vector-icons/Ionicons'

const PlaceDetail = ({selectedPlace, onItemDelete, onModalClose}) => {
  if (selectedPlace === null) return null

  return (
    <Modal onRequestClose={onModalClose} visible={selectedPlace !== null} animationType="slide" >
      <View style={styles.modalContainer}>
        <Image source={selectedPlace.placeImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.placeName}>{selectedPlace.placeName}</Text>
        <View>
          <TouchableOpacity onPress={onItemDelete}>
            <View style={styles.deleteButton}>
              <Icon size={30} name={"ios-trash"} color="red"/>
            </View>
          </TouchableOpacity>
          <Button title="Close" style={styles.button} onPress={onModalClose}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
  },
  image: {
    height: 100,
    width: 100,
  },
  button: {
    marginTop: 5,
  },
  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
  }
})

const mapStateToProps = state => {
  return {
    selectedPlace: state.places.selectedPlace,
  }
}

export default connect(mapStateToProps)(PlaceDetail);
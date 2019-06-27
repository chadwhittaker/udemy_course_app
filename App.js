/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useScreens } from 'react-native-screens';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddItem from './src/components/AddItem';
import ListItems from './src/components/ListItems';
import PlaceDetail from './src/components/PlaceDetail';
import ScreenTwo from './src/components/ScreenTwo';
import ScreenThree from './src/components/ScreenThree'

useScreens();

const App = props => {
  // state declaration
  const [place, setPlace] = useState({
    key: null,
    placeName: '',
    placeImage: null,
  });
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // navigation
  const { navigate } = props.navigation;

  const onItemSelected = key => {
    setSelectedPlace(places.find(place => key === place.key));
  };

  const onItemDelete = () => {
    const newPlaces = places.filter(place => place.key !== selectedPlace.key);
    setPlaces(newPlaces);
    setSelectedPlace(null);
  };

  const onModalClose = () => {
    setSelectedPlace(null);
  };

  return (
    <View style={styles.container}>
      <PlaceDetail
        selectedPlace={selectedPlace}
        onItemDelete={onItemDelete}
        onModalClose={onModalClose}
      />
      <AddItem place={place} setPlace={setPlace} places={places} setPlaces={setPlaces} />
      <ListItems places={places} onItemSelected={onItemSelected} />
      <Button title='Screen2' onPress={() => navigate('ScreenTwo')} />
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
    // marginTop: 20,
  },
});

App.navigationOptions = {
  title: 'Home'
}

// react-navigation setup
const AppNavigator = createStackNavigator(
  {
    Home: App,
    ScreenTwo: ScreenTwo,
    ScreenThree: ScreenThree,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

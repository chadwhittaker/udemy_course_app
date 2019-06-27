import React from 'react';
import { View, Text, Button } from 'react-native';

const ScreenThree = (props) => {
  const { navigate } = props.navigation;

  return (
    <View>
      <Text>Screen Three!</Text>
      <Button title='Go to Screen2' onPress={() => navigate('ScreenTwo')} />
    </View>
  );
};

ScreenThree.navigationOptions = {
  title: 'Screen3'
}

export default ScreenThree;
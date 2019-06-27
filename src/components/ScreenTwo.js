import React from 'react';
import { View, Text, Button } from 'react-native';

const ScreenTwo = (props) => {
  const { navigate } = props.navigation;

  return (
    <View>
      <Text>Screen Two!</Text>
      <Button title='Go to Screen3' onPress={() => navigate('ScreenThree')} />
    </View>
  );
};

ScreenTwo.navigationOptions = {
  title: 'Screen2'
}

export default ScreenTwo;

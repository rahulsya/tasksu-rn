import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Experiment from '../screens/Experiment';
import Spash from '../screens/Spash';
import {RootStackParamList} from '../ultility/navigationTypes';

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Options = {
    headerShown: false,
  };
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Example" component={Experiment} options={Options} />
      <Stack.Screen name="Splash" component={Spash} options={Options} />
    </Stack.Navigator>
  );
};

export default Route;

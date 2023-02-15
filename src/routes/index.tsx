import React from 'react';
import {createNativeStackNavigator,NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {RootStackParamList} from '../ultility/navigationTypes';

import Experiment from '../screens/Experiment';
import Spash from '../screens/Spash';
import {Onboarding,Login,SignIn} from '../screens'

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Options:NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Example" component={Experiment} options={Options} />
      <Stack.Screen name="Splash" component={Spash} options={Options} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={Options} />
      <Stack.Screen name="SignIn" component={SignIn} options={Options} />
      <Stack.Screen name="Login" component={Login} options={Options} />
    </Stack.Navigator>
  );
};

export default Route;

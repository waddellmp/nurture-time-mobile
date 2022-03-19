import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HomeScreen} from '../screens/home-screen';
import {LoginScreen} from '../screens/login-screen';

const Stack = createNativeStackNavigator();

export function NativeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

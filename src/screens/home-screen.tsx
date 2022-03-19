import * as React from 'react';
import {Text, Center, Button} from 'native-base';
import {NavigationProp} from '@react-navigation/native';
import {LoginScreen} from './login-screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useNavigation from '../hooks/useNavigation';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Center>
      <Text>Home Screen</Text>
      <Center>
        <Button variant={'solid'} onPress={() => navigation.navigate('Login')}>
          Go to Login Page
        </Button>
      </Center>
    </Center>
  );
}

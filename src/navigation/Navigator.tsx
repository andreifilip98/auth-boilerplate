import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import Login from '../screens/Auth/Login.screen';
import SignUp from '../screens/Auth/SignUp.screen';
import {
  SCREEN_LOGIN,
  SCREEN_SIGNUP
} from './Routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

interface Props {
  navigationRef: NavigationContainerRefWithCurrent<any>;
}

const Navigator = (props: Props) => (
  <NavigationContainer ref={React.createRef()}>
    <Stack.Navigator initialRouteName={SCREEN_LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={SCREEN_LOGIN}
        component={Login}
        options={{
          headerShown: false,
          title: 'Login',
        }} />
      <Stack.Screen
        name={SCREEN_SIGNUP}
        component={SignUp}
        options={{
          headerShown: false,
          title: 'SignUp',
        }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;

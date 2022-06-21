import React from 'react';
import {TouchableOpacity, View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import Login from '../screens/Auth/Login.screen';
import SignUp from '../screens/Auth/SignUp.screen';
import {
  SCREEN_LOGIN,
  SCREEN_SIGNUP,
  SCREEN_DASHBOARD,
  SCREEN_PROFILE, SCREEN_NOTIFICATIONS
} from './Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Profile from "../screens/Profile.screen";
import Messages from "../screens/Messages.screen";
import Newsfeed from "../screens/Newsfeed.screen";
import Notifications from "../screens/Notifications.screen";
import Dashboard from "../screens/Dashboard.screen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

interface Props {
  navigationRef: NavigationContainerRefWithCurrent<any>;
}

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Profile" component={Profile} />
      <BottomTab.Screen name="Messages" component={Messages} />
      <BottomTab.Screen name="Newsfeed" component={Newsfeed} />
    </BottomTab.Navigator>
  )
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
  )
};

const Navigator = (props: Props) => (
  <NavigationContainer ref={React.createRef()}>
    <Stack.Navigator initialRouteName={SCREEN_LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_DASHBOARD}>
        {() => (
          <BottomTabNavigator/>
        )}
      </Stack.Screen>
      <Stack.Screen name={SCREEN_NOTIFICATIONS}>
        {() => (
          <DrawerNavigator/>
        )}
      </Stack.Screen>
      <Stack.Screen
        name={SCREEN_LOGIN}
        component={Login}
        options={{
          headerShown: false,
          title: 'Login',
          gestureEnabled: true
        }} />
      <Stack.Screen
        name={SCREEN_SIGNUP}
        component={SignUp}
        options={{
          headerShown: false,
          title: 'SignUp',
          gestureEnabled: true
        }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;

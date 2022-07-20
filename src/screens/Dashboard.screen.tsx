import React from 'react';
import {Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { colors } from '../styleguide';
import PostList from "../components/PostList";
import Profile from "./Profile.screen";
import {Provider} from "react-redux";
import { createStore, applyMiddleware} from "redux";
import combineReducers from '../../src/store/reducers'
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../store/reducers/postReducer";

const StyledView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.lightBackgroundBlue};
`;

type DashboardProps = {
  navigation: unknown;
}

const Dashboard = ({navigation}: DashboardProps) => {

  return (
    <Provider store={configureStore({reducer: combineReducers, middleware: [thunk]})}>
    <StyledView style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Welcome to Dashboard
      </Text>
      <PostList/>
    </StyledView>
    </Provider>
  );
};

export default Dashboard;

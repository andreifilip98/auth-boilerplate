import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigator from "./src/navigation/Navigator";
import { useNavigationContainerRef } from "@react-navigation/native";
import Provider from "react-redux/es/components/Provider";
import { applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './src/store/reducers'
import thunk from 'redux-thunk'
import postReducer from "./src/store/reducers/postReducer";
import {DefaultTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper'

const theme={
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: '#BADA55',
    primary: '#f132de',
    secondary: '#7ef1e9',
  },
  animation: {
    scale: 1.0,
  },
};

export type ThemeOverride = typeof theme

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationRef = useNavigationContainerRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return(
    <Provider store={configureStore({reducer: combineReducers, middleware: [thunk]})}>
      <PaperProvider theme={theme}>
      <Navigator navigationRef={navigationRef} />
      </PaperProvider>
    </Provider>
  )
};

export default App;

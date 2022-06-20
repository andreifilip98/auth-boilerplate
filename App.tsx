import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigator from "./src/navigation/Navigator";
import { useNavigationContainerRef } from "@react-navigation/native";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationRef = useNavigationContainerRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <Navigator navigationRef={navigationRef} />;
};

export default App;

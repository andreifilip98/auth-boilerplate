import * as React from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { colors } from '../styleguide';
import { Button, withTheme, TextInput } from 'react-native-paper';
import useLinkProps from "@react-navigation/native/lib/typescript/src/useLinkProps";

const StyledView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.lightBackgroundBlue};
`;

const Notifications = (props: any) =>{

  const {colors} = props.theme;

  const [text, setText] = React.useState("");

  return (
    <StyledView style={{alignItems: 'center', justifyContent: 'center'}}>
      {/*<Text style={{color: colors.primary}}>*/}
      {/*  Welcome to Notifications*/}
      {/*</Text>*/}
      <TextInput
        label="Email"
        mode={'outlined'}
        value={text}
        onChangeText={(text) => setText(text)}
        style={{width: '80%', height: 100, borderRadius: 10}}
        activeOutlineColor={colors.myOwnColor}
        theme={{roundness: 12}}
      />
      {/*<Button raised theme={{ roundness: 3}}>*/}
      {/*  Press me*/}
      {/*</Button>*/}
    </StyledView>
  );
};

export default withTheme(Notifications);

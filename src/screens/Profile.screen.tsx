import React from 'react';
import {Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { colors } from '../styleguide';

const StyledView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.lightBackgroundBlue};
`;

type ProfileProps = {
  navigation: unknown;
}

const Profile = ({navigation}: ProfileProps) => {

  return (
    <StyledView style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Welcome to Profile
      </Text>
    </StyledView>
  );
};

export default Profile;

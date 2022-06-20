import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { colors } from '../../styleguide';
import {SCREEN_LOGIN} from "../../navigation/Routes";

const StyledView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.lightBackgroundBlue};
`;

const StyledTextInput = styled(TextInput)`
  height: 50px;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
`;

const  StyledLoginButton = styled(TouchableOpacity)`
  height: 50px;
  width: 200px;
  background-color: darkcyan;
  border-radius: 10px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

const StyledLoginText = styled(Text)`
  color: white;
  font-weight: 400;
  font-size: 20px;
`;

const StyledSignUpButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 50px;
`;

const ColoredSignUpText = styled(Text)`
  color: #00008B;
  font-weight: 600;
  margin-left: 10px;
  font-size: 18px;
`;

const StyledPlainText = styled(Text)`
  font-size: 16px;
`;

type SignUpProps = {
  navigation: unknown;
}

const SignUp = ({navigation}: SignUpProps) => {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmedPassword, setConfirmedPassword] = React.useState('');
  const [matchingPass, setMatchingPass] = React.useState(false);

  return (
    <StyledView style={{alignItems: 'center', justifyContent: 'center'}}>
      <StyledTextInput
        onChangeText={(firstName) => setFirstName(firstName)}
        placeholder="First Name"
        value={firstName}
      />
      <StyledTextInput
        onChangeText={(lastName) => setLastName(lastName)}
        placeholder="Last Name"
        value={lastName}
      />
      <StyledTextInput
        onChangeText={(email) => setEmail(email)}
        placeholder="Email address"
        value={email}
      />
      <StyledTextInput
        secureTextEntry={true}
        onChangeText={(pass) => setPassword(pass)}
        placeholder="Password"
        value={password}
      />
      <StyledTextInput
        secureTextEntry={true}
        onChangeText={(pass) =>{
          setConfirmedPassword(pass);
          password === pass ? setMatchingPass(true) : setMatchingPass(false)
        }}
        placeholder="Confirm Password"
        value={confirmedPassword}
      />
      {
        confirmedPassword !== '' ?
          matchingPass ?
            <Text>
              Passwords are matching
            </Text>
            :
            <Text>
              Passwords are different
            </Text>
          : null

      }
      <StyledLoginButton>
        <StyledLoginText>
          SignUp
        </StyledLoginText>
      </StyledLoginButton>
      <StyledSignUpButton onPress={() => navigation.navigate(SCREEN_LOGIN)}>
        <StyledPlainText>
          Have an account?
        </StyledPlainText>
        <ColoredSignUpText>
          Login
        </ColoredSignUpText>
      </StyledSignUpButton>
    </StyledView>
  );
};

export default SignUp;

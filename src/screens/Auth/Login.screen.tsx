import React from 'react';
import {Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { colors } from '../../styleguide';
import {SCREEN_DASHBOARD, SCREEN_SIGNUP, SCREEN_PROFILE, SCREEN_NOTIFICATIONS} from "../../navigation/Routes";

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

type LoginProps = {
  navigation: unknown;
}

const loginCredentialsCheck = (email: String, password: String, account: {email: String, password: String},
                               navigation: unknown) => {

  if(email !== '' && password !== ''){
    if(account.email === email && account.password === password){
      navigation.navigate(SCREEN_DASHBOARD)
    }else{
      Alert.alert('Incorrect credentials')
    }
  }else{
    if(email === ''){
      Alert.alert('Please enter your email');
    }else{
      Alert.alert('Please enter your password');
    }
  }
};

const Login = ({navigation}: LoginProps) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const account = {email: 'andrei@rebaseit.net', password: '123456asd'};

  return (
    <StyledView style={{alignItems: 'center', justifyContent: 'center'}}>
      <StyledTextInput
        autoCapitalize='none'
        onChangeText={(email) => setEmail(email)}
        placeholder="Email address"
        value={email}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <StyledTextInput
        secureTextEntry={true}
        onChangeText={(pass) => setPassword(pass)}
        placeholder="Password"
        textContentType="oneTimeCode"
        value={password}
        onSubmitEditing={()=> loginCredentialsCheck(email, password, account, navigation)}
      />
      <StyledLoginButton onPress={() => loginCredentialsCheck(email, password, account, navigation)}>
        <StyledLoginText>
          Login
        </StyledLoginText>
      </StyledLoginButton>
      <StyledSignUpButton onPress={() => navigation.navigate(SCREEN_SIGNUP)}>
        <StyledPlainText>
          Don't have an account?
        </StyledPlainText>
        <ColoredSignUpText>
          SignUp
        </ColoredSignUpText>
      </StyledSignUpButton>
    </StyledView>
  );
};

export default Login;

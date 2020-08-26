import * as React from 'react'

import { RootStackParamList } from 'types';
import SigninLayout from 'src/components/template/SinginLayout';
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';

const Container = styled.View``;

interface Props {
  navigation: StackScreenProps<RootStackParamList, 'SignIn'>
}

const Signin:React.FC<Props> = (props): React.ReactElement => {
  return (
    <SigninLayout
      onClickGuest={() => { props.navigation.replace('Root'); }}
    />
  );
};

export default Signin;

import * as React from 'react';

import { RootStackParamList } from 'src/navigation/types';
import SigninLayout from 'templates/SinginLayout';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>
}

const Signin:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <SigninLayout
      onClickGuest={() => { props.navigation.replace('Root') }}
    />
  );
};

export default Signin;

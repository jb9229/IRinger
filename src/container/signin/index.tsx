import * as React from 'react';

import { RootStackParamList } from 'types';
import SigninLayout from 'templates/SinginLayout';
import { StackScreenProps } from '@react-navigation/stack';

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

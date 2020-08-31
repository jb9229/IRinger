import * as React from 'react'

import { EditText, EditTextInputType } from 'dooboo-ui';

import SoildButton from '../atoms/Button/Solid';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const LoginButton = styled(SoildButton)`
  margin-bottom: 10px;
`;

const GuestButton = styled(SoildButton)`
  margin-top: 10px;
`;

interface Props {
  onClickGuest: () => void;
}

const SigninLayout:React.FC<Props> = (props): React.ReactElement => {
  return (
    <Container>
      <EditText
        testID="input-email"
        errorTestID="error-email"
        type={EditTextInputType.ROW}
        textStyle={{
          color: 'black',
        }}
        style={{ marginBottom: 20 }}
        isRow={true}
        label={"ID"}
        placeholderTextColor={'gray'}
        placeholder="dev"
        value={undefined}
        onChangeText={(text: string): void => {}}
        errorText={undefined}
        onSubmitEditing={() => {}}
      />
      <EditText
        testID="input-password"
        errorTestID="error-password"
        type={EditTextInputType.ROW}
        textStyle={{
          color: 'black',
        }}
        style={{ marginBottom: 20 }}
        isRow={true}
        label={"PASSWORD"}
        placeholder="******"
        placeholderTextColor={'gray'}
        value={undefined}
        onChangeText={(text: string): void => {}}
        errorText={undefined}
        onSubmitEditing={() => {}}
        secureTextEntry={true}
      />
      <LoginButton text="로그인" isDisabled={true} onPress={() => props.onClickGuest()} />
      <GuestButton text="둘러보기" onPress={() => props.onClickGuest()} />
    </Container>
  );
};

export default SigninLayout;

import * as React from 'react'

import DefaultButton from '../atoms/Button';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  onClickGuest: () => void;
}

const SigninLayout:React.FC<Props> = (props): React.ReactElement => {
  return (
    <Container>
      <DefaultButton text="둘러보기" onPress={() => props.onClickGuest()} />
    </Container>
  );
};

export default SigninLayout;

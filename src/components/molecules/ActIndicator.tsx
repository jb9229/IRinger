import * as React from 'react';

import styled, { DefaultTheme, withTheme } from 'styled-components/native';

import { ActivityIndicator } from 'react-native';

interface StyledProps {
  color?: string;
  size?: number;
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Message = styled.Text<StyledProps>`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.color || props.theme.primary};
`;

interface Props {
  theme: DefaultTheme;
  msg?: string;
  size?: number;
  color?: string;
}
const ActIndicator: React.FC<Props> = (props) =>
{
  const sizeValue = props.size || 28;

  return (
    <Container>
      <Message color={props.color || props.theme.primary}>{props.msg || '정보를 불러오는 중..'}</Message>
      <ActivityIndicator size={sizeValue} color={props.color} />
    </Container>
  );
};

export default withTheme(ActIndicator);

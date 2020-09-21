import * as React from 'react';

import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

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
  color: ${(props) => props.color};
`;

interface Props {
  msg?: string;
  size?: number;
  color?: string;
}
const ActIndicator: React.FC<Props> = (props) =>
{
  const sizeValue = props.size || 28;
  const colorValue = props.color || 'yellow';

  return (
    <Container>
      <Message color={colorValue}>{props.msg || '정보를 불러오는 중..'}</Message>
      <ActivityIndicator size={sizeValue} color={colorValue} />
    </Container>
  );
};

export default ActIndicator;

import * as React from 'react';

import { DefaultStyledProps } from 'src/theme';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  bottom: 30px;
  right: 10px;
`;

const ButtonTO = styled.TouchableOpacity<DefaultStyledProps>`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  border-radius: 150px;

  shadow-offset: 0px 5px;
  shadow-color: rgba(0, 0, 0, 0.8);
  shadow-opacity: 0.3px;
  elevation: 4px;
`;

const ButtonText = styled.Text`
  font-size: 26px;
  color: white;
  font-weight: bold;
`;

interface Props {
  onClick: () => void;
  text: string;
}

const FloatButton: React.FC<Props> = (props) =>
{
  return (
    <Container>
      <ButtonTO onPress={props.onClick}>
        <ButtonText>{props.text}</ButtonText>
      </ButtonTO>
    </Container>
  );
};

export default FloatButton;

import { DefaultStyledProps } from 'src/theme';
import styled from 'styled-components/native';

export const ListSeperator = styled.View<DefaultStyledProps>`
  height: 2px;
  background-color: ${(props) => props.theme.backgroundListSeperator};
  border-radius: 10px;
  width: 92%;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

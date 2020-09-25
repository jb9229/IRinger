import { DefaultStyledProps, koFont } from 'src/theme';

import styled from 'styled-components/native';

export const ListLabel = styled.Text<DefaultStyledProps>`
  color: ${(props): string => props.theme.textListLabel};
  font-Family: ${koFont.FontTitle};
  font-size: 18;
`;

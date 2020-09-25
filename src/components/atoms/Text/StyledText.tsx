import { Dimensions, PixelRatio, Platform } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

import { koFont } from 'src/theme';

interface StyleProps {
  theme: DefaultTheme;
  size?: number;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

export function normalize(size: number): number
{
  const newSize = size * scale;

  if (Platform.OS === 'ios')
  {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  else
  {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const RText = styled.Text<StyleProps>`
  font-Family: ${koFont.FontBatang};
  font-size: ${(props: StyleProps): number => props.size ? props.size : 16};
  /* line-height: ${(props: StyleProps): number => props.size ? props.size + 8 : 22}; */
`;

export const BText = styled.Text<StyleProps>`
  font-Family: ${koFont.FontTitle};
  font-size: ${(props: StyleProps): number => props.size ? props.size : 21};
  /* line-height: ${(props: StyleProps): number => props.size ? props.size + 8 : 22}; */
`;

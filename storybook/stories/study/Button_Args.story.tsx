// Button.stories.tsx

import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

import { Button } from 'dooboo-ui';
import React from 'react';
import { Story } from '@storybook/react/types-6-0';

interface ChildStyle {
  style?: ViewStyle;
  textStyle?: TextStyle;
}
declare type ColorType = 'decision' | 'idea' | 'emotion' | 'benefit' | 'facts' | 'criticism';
interface ButtonProps {
  testID?: string;
  indicatorColor?: string;
  color?: ColorType;
  loading?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabledStyle?: ChildStyle;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
  activeOpacity?: number;
  text?: string;
  outlined?: boolean;
  onPress?: () => void;
  touchableOpacityProps?: TouchableOpacityProps & any;
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Primary'
};

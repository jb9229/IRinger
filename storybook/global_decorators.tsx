import * as React from 'react';

import { dark, light } from '../src/theme';

import { ThemeProvider } from '@dooboo-ui/theme';
import { addDecorator } from '@storybook/react-native';

const ThemeProviderDecorator = (storyFn: any): React.ReactElement => (
  <ThemeProvider customTheme={{ light, dark }}>{storyFn()}</ThemeProvider>
);

// const SafeZonDecorator = (storyFn) => (
//   <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 25 }}>
//     {storyFn()}
//   </View>
// );

export const setupGlobalDecorators = (): void => {
  //* the order is important, the decoratos wrap from bottom to top
  // addDecorator(SafeZonDecorator);
  addDecorator(ThemeProviderDecorator);
};

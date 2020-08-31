import * as React from 'react';

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../../screens/NotFoundScreen';
import RingerCreateScreen from 'container/ringer/create';
import { RootStackParamList } from './types';
import SignInScreen from 'src/container/signin';
import { createStackNavigator } from '@react-navigation/stack';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }): React.ReactElement
{
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): React.ReactElement
{
  const token = undefined;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
      {!token && (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      )}
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="RingerCreate" component={RingerCreateScreen} />
    </Stack.Navigator>
  );
}

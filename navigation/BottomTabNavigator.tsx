import * as React from 'react';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

// import TabTwoScreen from '../screens/TabTwoScreen';
import AppSettingScreen from 'container/app-setting';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import TabOneScreen from '../screens/TabOneScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import useColorScheme from '../src/hooks/useColorScheme';

const Image = styled.Image`
  width: 32px;
  height: 32px;
`;

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): React.ReactElement {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="링거"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image source={require('../assets/images/iRingerIcon.png')} />
        }}
      />
      <BottomTab.Screen
        name="내정보"
        component={AppSettingScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-information-circle-outline" color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }): React.ReactElement {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator(): React.ReactElement {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator(): React.ReactElement {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

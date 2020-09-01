import * as React from 'react';

import { AdminSettingParamList, AppSettingParamList, BottomTabParamList, RingerListParamList } from './types';

import AdminSettingScreen from 'container/admin';
// import TabTwoScreen from '../screens/TabTwoScreen';
import AppSettingScreen from 'container/app-setting';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import RingerListScreen from 'container/ringer/list';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import useColorScheme from 'hooks/useColorScheme';

const Image = styled.Image`
  width: 32px;
  height: 32px;
`;

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): React.ReactElement
{
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="링거 모니터링"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="링거 모니터링"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image source={require('assets/images/iRingerIcon.png')} />
        }}
      />
      <BottomTab.Screen
        name="내정보"
        component={AppSettingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-information-circle-outline" color={color} />
        }}
      />
      <BottomTab.Screen
        name="관리자"
        component={AdminSettingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-settings" color={color} />
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
const RingerListStack = createStackNavigator<RingerListParamList>();

function TabOneNavigator(): React.ReactElement
{
  return (
    <RingerListStack.Navigator>
      <RingerListStack.Screen
        name="RingerListScreen"
        component={RingerListScreen}
        options={{ headerTitle: 'Ringer List' }}
      />
    </RingerListStack.Navigator>
  );
}

/**
 * 내정보 네비게이팅
 */
const AppSettingStack = createStackNavigator<AppSettingParamList>();

function AppSettingNavigator(): React.ReactElement
{
  return (
    <AppSettingStack.Navigator>
      <AppSettingStack.Screen
        name="AppSettingScreen"
        component={AppSettingScreen}
        options={{ headerTitle: 'App Setting' }}
      />
    </AppSettingStack.Navigator>
  );
}

/**
 * 관리자 네비게이팅
 */
const AdminSettingStack = createStackNavigator<AdminSettingParamList>();

function AdminSettingNavigator(): React.ReactElement
{
  return (
    <AdminSettingStack.Navigator>
      <AdminSettingStack.Screen
        name="AdminSettingScreen"
        component={AdminSettingScreen}
        options={{ headerTitle: 'Admin Setting' }}
      />
    </AdminSettingStack.Navigator>
  );
}

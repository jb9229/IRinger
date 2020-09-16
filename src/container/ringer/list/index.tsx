import * as React from 'react';

import MonitoringListLayout from 'src/components/templates/MonitoringListLayout';
import MonitoringListProvider from './MonitoringListProvider';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props
{
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const RingetListContainer:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <MonitoringListProvider navigation={props.navigation}>
      <MonitoringListLayout />
    </MonitoringListProvider>
  );
};

export default RingetListContainer;

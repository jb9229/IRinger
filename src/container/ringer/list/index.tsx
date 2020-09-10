import * as React from 'react';

import RingerListLayout from 'templates/RingerListLayout';
import RingerListProvider from './RingerListProvider';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props
{
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const RingetListContainer:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <RingerListProvider navigation={props.navigation}>
      <RingerListLayout />
    </RingerListProvider>
  );
};

export default RingetListContainer;

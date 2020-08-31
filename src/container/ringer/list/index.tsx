import * as React from 'react';

import RingerListLayout from 'templates/RingerListLayout';
import { RingerListParamList } from 'src/navigation/types';
import RingerListProvider from './RingerListProvider';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props
{
  navigation: StackNavigationProp<RingerListParamList, 'RingerListScreen'>
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

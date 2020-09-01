import * as React from 'react';

import RingerCreateLayout from 'templates/RingerCreateLayout';
import RingerCreateProvider from './RingerCreateProvider';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}

const RingerCreateContainer:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <RingerCreateProvider navigation={props.navigation}>
      <RingerCreateLayout />
    </RingerCreateProvider>
  );
};

export default RingerCreateContainer;

import * as React from 'react';

import { MI_SUBSCRIPTION } from 'src/apollo/subscription';
import { Provider } from './RingerListContext';
import { RingerInjection } from '../types';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { monitoringListState } from '../monitoring/store';
import { useRecoilState } from 'recoil';
import { useSubscription } from '@apollo/client';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const RingerListProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const states = {
  };

  const actions = {
    onClickAddRinger()
    {
      props.navigation.navigate('RingerCreate');
    },
    onAddMonitoring()
    {
      props.navigation.navigate('RingerListModal');
    }
  };

  return (
    <Provider value={{ ...states, ...actions }}>{props.children}</Provider>
  );
};

export default RingerListProvider;

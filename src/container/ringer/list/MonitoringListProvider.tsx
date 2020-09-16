import * as React from 'react';

import { MI_SUBSCRIPTION } from 'src/apollo/subscription';
import { Provider } from './RingerListContext';
import { RingerInjection } from '../types';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSubscription } from '@apollo/client';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const RingerListProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const { data, loading } = useSubscription(MI_SUBSCRIPTION);

  const ringerInjectionList = new Array<RingerInjection>();

  if (data?.monitoringInjection)
  {
    ringerInjectionList.push(
      new RingerInjection('ringer001', data.monitoringInjection.gtt, 100, data.monitoringInjection.battery, 1000, 100, 13));
  }
console.log('>>> data?.monitoringInjection: ', data?.monitoringInjection);
  const states = {
    ringerInjectionList: ringerInjectionList
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

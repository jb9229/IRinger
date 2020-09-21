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
  const { data, loading } = useSubscription(MI_SUBSCRIPTION, {
    onSubscriptionData: () =>
    {
      // console.log(data);
      if (data?.monitoringInjection)
      {
        const mi = data.monitoringInjection;

        const newList = monitoringList.map((monitoring) =>
        {
          if (mi.sn === monitoring.lingerSN)
          {
            return new RingerInjection(mi.sn, monitoring.lingerName, mi.gtt, 100, mi.battery, 100, 100, mi.restAmong);
          }

          return monitoring;
        });

        setMonitoringList(newList);
      }
    }
  });
  const [monitoringList, setMonitoringList] = useRecoilState(monitoringListState);

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

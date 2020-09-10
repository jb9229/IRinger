import * as React from 'react';

import { Provider } from '../../src/container/ringer/list/RingerListContext';
import { RingerInjection } from 'src/container/ringer/types';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const RingerListSBProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const ringerInjectionList = new Array<RingerInjection>();

  ringerInjectionList.push(new RingerInjection('ringer001', 10, 100, 50, 1000, 100, 13));
  ringerInjectionList.push(new RingerInjection('ringer002', 11, 100, 50, 1000, 100, 23));
  ringerInjectionList.push(new RingerInjection('ringer003', 12, 100, 50, 1000, 100, 13));
  ringerInjectionList.push(new RingerInjection('ringer004', 13, 100, 50, 1000, 100, 43));
  ringerInjectionList.push(new RingerInjection('ringer005', 14, 100, 50, 1000, 100, 53));

  const states = {
    ringerInjectionList: ringerInjectionList
  };

  const actions = {
    onClickAddRinger()
    {
      console.log('onClickAddRinger');
    }
  };

  return (
    <Provider value={{ ...states, ...actions }}>{props.children}</Provider>
  );
};

export default RingerListSBProvider;

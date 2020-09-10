import * as React from 'react';

import { Provider } from './RingerListContext';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const RingerListProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const states = {
    ringerInjectionList: []
  };

  const actions = {
    onClickAddRinger()
    {
      props.navigation.navigate('RingerCreate');
    }
  };

  return (
    <Provider value={{ ...states, ...actions }}>{props.children}</Provider>
  );
};

export default RingerListProvider;

import * as React from 'react';

import { Provider } from './RingerListContext';
import { RingerListParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RingerListParamList, 'RingerListScreen'>
}
const RingerListProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const states = {
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

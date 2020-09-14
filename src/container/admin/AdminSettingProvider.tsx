import * as React from 'react';

import { Provider } from './AdminSettingContext';
import { RINGER_LIST } from 'src/apollo/query';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from '@apollo/client';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const AdminSettingProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const ringersRsp = useQuery(RINGER_LIST);

  const states = {
    ringerList: ringersRsp.data?.ringers || []
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

export default AdminSettingProvider;

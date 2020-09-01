import * as React from 'react';

import { RingerCreateDto, RingerCreateErrorData } from './type';

import { Provider } from './RingerCreateContext';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const RingerCreateProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const [createDto, setCreateDto] = React.useState(new RingerCreateDto());
  const [errorData, setErrorData] = React.useState<RingerCreateErrorData>(new RingerCreateErrorData());

  // states
  const states = {
    createDto,
    errorData
  };

  // actions
  const actions = {
    onClickGoBack()
    {
      props.navigation.goBack();
    },
    onSubmit()
    {
      props.navigation.navigate('Root');
    }
  };

  return (
    <Provider value={{ ...states, ...actions }}>{props.children}</Provider>
  );
};

export default RingerCreateProvider;

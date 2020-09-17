import * as React from 'react';

import { RingerCreateDto, RingerCreateErrorData, ValidationResult } from './type';

import { CREATE_RINGER } from 'src/apollo/mutation';
import { Provider } from './RingerCreateContext';
import { RingerListParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { noticeUserError } from 'src/utils/ErrorReport';
import { useMutation } from '@apollo/client';
import { validateCreateRinger } from './action';

interface Props {
  navigation: StackNavigationProp<RingerListParamList, 'RingerListScreen'>
}
const RingerCreateProvider:React.FC<Props> = (props): React.ReactElement =>
{
  const [createDto, setCreateDto] = React.useState(new RingerCreateDto());
  const [errorData, setErrorData] = React.useState<RingerCreateErrorData>(new RingerCreateErrorData());
  const [createRinger, createRingerRsp] = useMutation(CREATE_RINGER, {
    onCompleted(data)
    {
      if (data.createRinger)
      {
        props.navigation.navigate('RingerListScreen');
      }
    }
  });

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
      validateCreateRinger(createDto)
        .then((result: ValidationResult) =>
        {
          setErrorData(result.error);

          if (result.result)
          {
            createRinger({ variables: { dto: createDto } });
          }
        })
        .catch((err) => { noticeUserError('FirmRegisterProvider(validateCreatFirmDto -> error)', err?.message) });
    }
  };

  return (
    <Provider value={{ ...states, ...actions }}>{props.children}</Provider>
  );
};

export default RingerCreateProvider;

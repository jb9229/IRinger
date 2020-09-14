import * as React from 'react';

import { FormEditText } from '../atoms/TextInput/Form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NaviHeader from 'molecules/NaviHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getString } from 'src/STRINGS';
import styled from 'styled-components/native';
import { useRingerCreateContext } from 'src/container/ringer/create/RingerCreateContext';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const StyledKeyboardAwareScrollView = styled(KeyboardAwareScrollView)`
  padding-horizontal: 20px;
`;

const RingerCreateLayout:React.FC = (): React.ReactElement =>
{
  const { createDto, errorData, onClickGoBack, onSubmit } = useRingerCreateContext();

  const [isValidSubmit, setValidSubmit] = React.useState(false);

  const validSubmit = (): boolean =>
  {
    if (!createDto.userId) { if (isValidSubmit) { setValidSubmit(false) } return false }
    if (!createDto.sn) { if (isValidSubmit) { setValidSubmit(false) } return false }
    if (!createDto.name) { if (isValidSubmit) { setValidSubmit(false) } return false }
    if (!createDto.hospitalId) { if (isValidSubmit) { setValidSubmit(false) } return false }

    if (!isValidSubmit) { setValidSubmit(true) }
    return true;
  };

  return (
    <StyledSafeAreaView>
      <Container>
        <NaviHeader
          title="링거 추가"
          rightActionText={getString('button.add')}
          onClickNavi={onClickGoBack}
          onClickRightAction={isValidSubmit ? onSubmit : undefined}
        />
        <StyledKeyboardAwareScrollView>
          <FormEditText
            onChangeText={(text) => { createDto.userId = text; validSubmit() }}
            label="사용자 아이디"
            placeholder="아이드를 입력하세요"
            errorText={errorData.userId}
          />
          <FormEditText
            onChangeText={(text) => { createDto.sn = text; validSubmit() }}
            label="시리얼 넘버"
            placeholder="시리얼 넘버를 입력하세요"
            errorText={errorData.sn}
          />
          <FormEditText
            onChangeText={(text) => { createDto.name = text; validSubmit() }}
            label="장치명"
            placeholder="장치명을 입력하세요"
            errorText={errorData.name}
          />
          <FormEditText
            onChangeText={(text) => { createDto.hospitalId = text; validSubmit() }}
            label="병원"
            placeholder="병원명을 입려하세요"
            errorText={errorData.hospitalId}
          />
        </StyledKeyboardAwareScrollView>
      </Container>
    </StyledSafeAreaView>
  );
};

export default RingerCreateLayout;

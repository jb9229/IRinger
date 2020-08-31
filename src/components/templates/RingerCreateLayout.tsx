import * as React from 'react';

import { EditText } from 'dooboo-ui';
import NaviHeader from 'molecules/NaviHeader';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Title = styled.Text``;

const RingerCreateLayout:React.FC = (): React.ReactElement => {
  return (
    <Container>
      <NaviHeader
        title="링거 추가"
        rightActionText=""
        onClickNavi={() => {}}
        onClickRightAction={() => {}}
      />
      <EditText
        label="사용자 아이디"
        placeholder="아이드를 입력하세요"
      />
      <EditText
        label="시리얼 넘버"
        placeholder="시리얼 넘버를 입력하세요"
      />
      <EditText
        label="장치명"
        placeholder="장치명을 입력하세요"
      />
      <EditText
        label="병원"
        placeholder="병원명을 입려하세요"
      />
    </Container>
  );
}
export default RingerCreateLayout;

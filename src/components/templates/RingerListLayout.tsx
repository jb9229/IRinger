import * as React from 'react';

import SoildButton from '../atoms/Button/Solid';
import styled from 'styled-components/native';
import { useRingerListContext } from 'container/ringer/list/RingerListContext';

const Container = styled.View``;

const RingerListLayout:React.FC = (): React.ReactElement =>
{
  const { onClickAddRinger } = useRingerListContext();
  return (
    <Container>
      <SoildButton
        text="링거 추가"
        onPress={onClickAddRinger}
      />
    </Container>
  );
};

export default RingerListLayout;

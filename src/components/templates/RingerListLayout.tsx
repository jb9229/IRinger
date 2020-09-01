import * as React from 'react';

import styled from 'styled-components/native';
import { useRingerListContext } from 'container/ringer/list/RingerListContext';

const Container = styled.View``;

const RingerListLayout:React.FC = (): React.ReactElement =>
{
  const { } = useRingerListContext();
  return (
    <Container>
    </Container>
  );
};

export default RingerListLayout;

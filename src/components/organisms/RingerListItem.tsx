import * as React from 'react';

import { Ringer } from 'src/container/ringer/create/type';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
const RingerSN = styled.Text``;
const RingerName = styled.Text``;

interface Props
{
  item: Ringer;
}
const RingerListItem:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <Container>
      <RingerSN>{props.item.sn}</RingerSN>
      <RingerName>{props.item.name}</RingerName>
    </Container>
  );
};

export default RingerListItem;

import * as React from 'react';

import { Ringer } from 'src/container/ringer/create/type';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  border-bottom-width: 1;
  padding: 15px;
`;
const RingerSN = styled.Text`
  width: 100;
`;
const RingerName = styled.Text`
  width: 100;
`;

interface Props
{
  item: Ringer;
  onPress: () => void;
}
const RingerListItem:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <Container onPress={props.onPress}>
      <RingerSN>{props.item.status}</RingerSN>
      <RingerSN>{props.item.sn}</RingerSN>
      <RingerName>{props.item.name}</RingerName>
    </Container>
  );
};

export default RingerListItem;

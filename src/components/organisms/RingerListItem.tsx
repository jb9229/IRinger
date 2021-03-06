import * as React from 'react';

import { Ringer } from 'src/container/ringer/create/type';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
`;
const RingerStatus = styled.Text`
  width: 25%;
`;
const RingerSN = styled.Text`
  width: 35%;
`;
const RingerName = styled.Text`
  width: 40%;
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
      <RingerStatus>{props.item.status}</RingerStatus>
      <RingerSN>{props.item.sn}</RingerSN>
      <RingerName>{props.item.name}</RingerName>
    </Container>
  );
};

export default RingerListItem;

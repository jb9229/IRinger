import * as React from 'react';

import { ReactNode } from 'react';
import RingerBar from '../molecules/RingerBar';
import { RingerInjection } from 'src/container/ringer/types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 1;
`;
const LeftWrap = styled.View`
  padding-horizontal: 10px;
  align-items: center;
`;
const CenterWrap = styled.View`
  padding-horizontal: 10px;
`;
const RightWrap = styled.View`
  padding-horizontal: 10px;
`;
const RingerName = styled.Text``;
const ItemText = styled.Text``;

interface Props {
  children?: ReactNode;
  item: RingerInjection;
}
const RingerListItem:React.FC<Props> = (props): React.ReactElement =>
{
  const ivAmountPercent = (props.item.ivCurrentAmount / props.item.ivTotalAmount) * 100;

  return (
    <Container>
      <LeftWrap>
        <RingerBar percent={ivAmountPercent} />
      </LeftWrap>
      <CenterWrap>
        <RingerName>
          {props.item.lingerName}
        </RingerName>
        <ItemText>
          남은시간: {props.item.restTime}분
        </ItemText>
      </CenterWrap>
      <RightWrap>
        <ItemText>배터리: {props.item.battery}</ItemText>
        <ItemText>수액용량: {props.item.ccPerHr}</ItemText>
        <ItemText>투여속도: {props.item.gtt}</ItemText>
      </RightWrap>
    </Container>
  );
};

export default RingerListItem;

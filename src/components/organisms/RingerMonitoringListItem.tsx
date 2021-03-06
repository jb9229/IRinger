import * as React from 'react';

import { MI_SUBSCRIPTION } from 'src/apollo/subscription';
import { ReactNode } from 'react';
import RingerBar from '../molecules/RingerBar';
import { RingerInjection } from 'src/container/ringer/types';
import { notificationTokenState } from 'src/container/signin/store';
import styled from 'styled-components/native';
import { useRecoilValue } from 'recoil';
import { useSubscription } from '@apollo/client';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 1px;
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
const ErrorNotice = styled.Text``;

interface Props {
  children?: ReactNode;
  item: RingerInjection;
}
const RingerMonitoringListItem:React.FC<Props> = (props): React.ReactElement =>
{
  const notificationToken = useRecoilValue(notificationTokenState);
  const { data, loading, error } = useSubscription(MI_SUBSCRIPTION, {
    variables: {
      dto:
      {
        sn: props.item.lingerSN,
        totalAmong: props.item.ivInfo.totalAmount,
        period: props.item.ivInfo.period,
        speed: props.item.ivInfo.speed,
        notificationId: notificationToken,
        speedAlarm: props.item.ivInfo.speedAlarm,
        amongAlarm: props.item.ivInfo.amongAlarm,
        subscribeType: props.item.subscribeType
      }
    }
  });

  console.log('RingerMonitoringListItem monitoringInjection: ', data?.monitoringInjection);
  console.log('RingerMonitoringListItem notificationToken: ', notificationToken);
  console.log('props.item: ', props.item);
  const ivAmountPercent =
    props.item.ivTotalAmount > 0 ? (props.item.ivCurrentAmount / props.item.ivTotalAmount) * 100 : 0;

  return (
    <Container>
      <ErrorNotice>{error?.message}</ErrorNotice>
      <LeftWrap>
        <RingerBar percent={data?.monitoringInjection?.restAmong || 3} />
      </LeftWrap>
      <CenterWrap>
        <RingerName>
          {props.item.lingerName}
        </RingerName>
        <ItemText>
          남은시간: {data?.monitoringInjection?.restAmong || '-'}분
        </ItemText>
      </CenterWrap>
      <RightWrap>
        <ItemText>배터리: {data?.monitoringInjection?.battery || '-'}</ItemText>
        <ItemText>수액용량: {props.item.ccPerHr}</ItemText>
        <ItemText>투여속도: {data?.monitoringInjection?.gtt || '-'}</ItemText>
      </RightWrap>
    </Container>
  );
};

export default RingerMonitoringListItem;

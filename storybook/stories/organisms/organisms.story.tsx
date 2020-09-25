import * as React from 'react';

import { IVInfoCrtDto, RingerInjection, SubscribeType } from 'src/container/ringer/types';

import CenterView from '../CenterView';
import { MI_SUBSCRIPTION } from 'src/apollo/subscription';
import { MockedProvider } from '@apollo/client/testing';
import RingerMonitoringListItem from 'src/components/organisms/RingerMonitoringListItem';
import { notificationTokenState } from 'src/container/signin/store';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import { useSetRecoilState } from 'recoil';

const mocks = [
  {
    request: {
      query: MI_SUBSCRIPTION,
      variables: {
        dto:
        {
          sn: 'IRinger777',
          totalAmong: 100,
          period: 30,
          speed: 3.1,
          notificationId: 'unknown',
          speedAlarm: '',
          amongAlarm: '',
          subscribeType: 'HOST'
        }
      }
    },
    result: {
      data: {
        monitoringInjection: { sn: 'IRinger777', gtt: 34, restAmong: 44, battery: 98 }
      }
    }
  }
];

const Container = styled.View`
  flex: 1;
`;
const ScrollView = styled.ScrollView`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 40px;
`;
const SubTitle = styled.Text`
  margin-top: 20px;
`;

storiesOf('Orgnisms', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('MonitoringListItem', () => React.createElement(() =>
  {
    const setNotificationToken = useSetRecoilState(notificationTokenState);

    setNotificationToken('unknown');
    return (
      <Container>
        <Title>Iringer Organisms States</Title>
        <SubTitle>Monitoring List Items</SubTitle>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RingerMonitoringListItem item={
            new RingerInjection('IRinger777', 'Ringer777_3hosil', 0, 0, 98, 25, 100, 20,
              new IVInfoCrtDto(100, 30, 3.1), SubscribeType.HOST)}
          />
        </MockedProvider>
      </Container>
    );
  }));

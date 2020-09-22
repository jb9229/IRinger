import * as React from 'react';

import { IVInfoCrtDto, RingerInjection } from 'src/container/ringer/types';
import styled, { DefaultTheme } from 'styled-components/native';

import CenterView from '../CenterView';
import { MI_SUBSCRIPTION } from 'src/apollo/subscription';
import { MockedProvider } from '@apollo/client/testing';
import RingerMonitoringListItem from 'src/components/organisms/RingerMonitoringListItem';
import { storiesOf } from '@storybook/react-native';

const mocks = [
  {
    request: {
      query: MI_SUBSCRIPTION,
      variables: {
        dto:
        { sn: 'IRinger777', totalAmong: 100, period: 30 }
      }
    },
    result: {
      data: {
        monitoringInjection: { sn: 'IRinger777', gtt: 34, restAmong: 20, battery: 98 }
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
  .add('MonitoringListItem', () => (
    <Container>
      <Title>Iringer Organisms States</Title>
      <SubTitle>Monitoring List Items</SubTitle>
      <MockedProvider mocks={mocks} addTypename={false}>
        <RingerMonitoringListItem item={
          new RingerInjection('IRinge777', 'Ringer777_3hosil', 0, 0, 98, 25, 100, 20, new IVInfoCrtDto(100, 30, 3.1))}
        />
      </MockedProvider>
    </Container>
  ));

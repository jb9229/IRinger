import * as React from 'react';

import CenterView from '../CenterView';
import MonitoringListLayout from 'src/components/templates/MonitoringListLayout';
import RingerListSBProvider from 'storybook/provider/RingerListSBProvider';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Container = styled.View``;

storiesOf('Screen', module)
  .addDecorator((getStory: () => React.ReactElement) => <CenterView>{getStory()}</CenterView>)
  .add('RingerList', () => (
    <RingerListSBProvider navigation={undefined}>
      <MonitoringListLayout />
    </RingerListSBProvider>
  ));

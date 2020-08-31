import * as React from 'react';

import CenterView from '../CenterView';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Container = styled.View``;

storiesOf('Icon', module)
  .addDecorator((getStory: () => React.ReactElement) => <CenterView>{getStory()}</CenterView>)
  .add('brand icons', () => (
    <Container></Container>
  ));

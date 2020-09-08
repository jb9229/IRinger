import * as React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import RingerListItem from '../organisms/RingerListItem';
import styled from 'styled-components/native';
import { useRingerListContext } from 'container/ringer/list/RingerListContext';

const Container = styled.View`
  flex: 1;
`;
const RingerList = styled(FlatList)``;

const RingerListLayout:React.FC = (): React.ReactElement =>
{
  const { ringerInjectionList } = useRingerListContext();

  return (
    <Container>
      <RingerList
        data={ringerInjectionList}
        renderItem={({ item, index }) => <RingerListItem item={item} />}
      />
    </Container>
  );
};

export default RingerListLayout;

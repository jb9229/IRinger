import * as React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { Ringer } from 'src/container/ringer/create/type';
import { RingerInjection } from 'src/container/ringer/types';
import RingerMonitoringListItem from '../organisms/RingerMonitoringListItem';
import SelectRingerListModal from './SelectRingerListModal';
import SoildButton from '../atoms/Button/Solid';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;
const RingerList = styled(FlatList)``;

const RingerListLayout:React.FC = (): React.ReactElement =>
{
  const [rlModalVisible, setRlModalVisible] = React.useState(false);
  const [monitoringList, setMonitoringList] = React.useState<Array<RingerInjection>>([]);

  return (
    <Container>
      <RingerList
        data={monitoringList}
        renderItem={({ item, index }: {item: RingerInjection; index: number}): React.ReactElement =>
          <RingerMonitoringListItem key={`KEY_${index}`} item={item} />}
      />
      <SoildButton text="링거 추가" onPress={() => setRlModalVisible(true)} />
      <SelectRingerListModal
        visible={rlModalVisible}
        onSelectRinger={(ringer: Ringer): void => setMonitoringList([...monitoringList,
          new RingerInjection(ringer.name, 0, 0, 0, 0, 0, 0)])}
        onClose={() => setRlModalVisible(false)}
      />
    </Container>
  );
};

export default RingerListLayout;

import * as React from 'react';

import { Ringer, RingerStatus } from 'src/container/ringer/create/type';

import { FlatList } from 'react-native-gesture-handler';
import MonitoringSettingModal from './MonitoringSettingModal';
import { RingerInjection } from 'src/container/ringer/types';
import RingerMonitoringListItem from '../organisms/RingerMonitoringListItem';
import SelectRingerListModal from './SelectRingerListModal';
import SoildButton from '../atoms/Button/Solid';
import { monitoringListState } from 'src/container/ringer/monitoring/store';
import styled from 'styled-components/native';
import { useRecoilState } from 'recoil';

const Container = styled.View`
  flex: 1;
`;
const RingerList = styled(FlatList)``;

const RingerListLayout:React.FC = (): React.ReactElement =>
{
  const [rlModalVisible, setRlModalVisible] = React.useState(false);
  const [rlSetModalVisible, setRlSetModalVisible] = React.useState(false);
  const [settingRinger, setSettingRinger] = React.useState<Ringer>();
  const [monitoringList, setMonitoringList] = useRecoilState(monitoringListState);

  return (
    <Container>
      <RingerList
        keyExtractor={(_, index) => `KEY_${index}`}
        data={monitoringList}
        renderItem={({ item, index }: {item: RingerInjection; index: number}): React.ReactElement =>
          <RingerMonitoringListItem key={`KEY_${index}`} item={item} />}
      />
      <SoildButton text="모니터링 추가" onPress={() => setRlModalVisible(true)} />
      <SelectRingerListModal
        visible={rlModalVisible}
        onSelectRinger={(ringer: Ringer): void =>
        {
          if (ringer.status === RingerStatus.RESET)
          {
            setRlModalVisible(false);
            setRlSetModalVisible(true);
            setSettingRinger(ringer);
          }
          else
          {
            setMonitoringList([...monitoringList, new RingerInjection(ringer.sn, ringer.name, 0, 0, 0, 0, 0, 0)]);
            setRlModalVisible(false);
          }
        }}
        onClose={() => setRlModalVisible(false)}
      />
      <MonitoringSettingModal
        visible={rlSetModalVisible}
        onComplate={() =>
        {
          settingRinger && setMonitoringList([...monitoringList,
            new RingerInjection(settingRinger.sn, settingRinger.name, 0, 0, 0, 0, 0, 0)]);
          setRlSetModalVisible(false);
        }}
        onClose={() => setRlSetModalVisible(false)}
      />
    </Container>
  );
};

export default RingerListLayout;

import * as React from 'react';

import { IVInfoCrtDto, RingerInjection } from 'src/container/ringer/types';
import { Ringer, RingerStatus } from 'src/container/ringer/create/type';

import { FlatList } from 'react-native-gesture-handler';
import FloatButton from '../atoms/Button/FloatingButton';
import MonitoringSettingModal from './MonitoringSettingModal';
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
      <FloatButton text="+" onClick={() => setRlModalVisible(true)} />
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
            setMonitoringList([...monitoringList,
              new RingerInjection(ringer.sn, ringer.name, 0, 0, 0, 0, 0, 0,
                new IVInfoCrtDto(ringer.ivTotalAmount, ringer.ivPeriod, ringer.ivSpeed))]);
            setRlModalVisible(false);
          }
        }}
        onClose={() => setRlModalVisible(false)}
      />
      <MonitoringSettingModal
        visible={rlSetModalVisible}
        onComplate={(dto: IVInfoCrtDto): void =>
        {
          console.log('>>> dto: ', dto)
          settingRinger && setMonitoringList([...monitoringList,
            new RingerInjection(settingRinger.sn, settingRinger.name, 0, 0, 0, 0, 0, 0, dto)]);
          setRlSetModalVisible(false);
        }}
        onClose={() => setRlSetModalVisible(false)}
      />
    </Container>
  );
};

export default RingerListLayout;

import * as React from 'react';

import { DefaultStyledProps, koFont } from 'src/theme';
import { IVInfoCrtDto, RingerInjection, SubscribeType } from 'src/container/ringer/types';
import { Ringer, RingerStatus } from 'src/container/ringer/create/type';

import { FlatList } from 'react-native-gesture-handler';
import FloatButton from '../atoms/Button/FloatingButton';
import MonitoringSettingModal from './MonitoringSettingModal';
import RingerMonitoringListItem from '../organisms/RingerMonitoringListItem';
import SelectRingerListModal from './SelectRingerListModal';
import { getString } from 'src/STRINGS';
import { monitoringListState } from 'src/container/ringer/monitoring/store';
import styled from 'styled-components/native';
import { useRecoilState } from 'recoil';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const EmptyNotice1 = styled.Text<DefaultStyledProps>`
  font-family: ${koFont.FontTalkTitle};
  font-size: 40;
`;

const EmptyNotice2 = styled.Text<DefaultStyledProps>`
  font-family: ${koFont.FontTalkTitle};
  font-size: 20;
`;

const RingerList = styled(FlatList)``;

const RingerListLayout:React.FC = (): React.ReactElement =>
{
  const [rlModalVisible, setRlModalVisible] = React.useState(false);
  const [rlSetModalVisible, setRlSetModalVisible] = React.useState(false);
  const [settingRinger, setSettingRinger] = React.useState<Ringer>();
  const [monitoringList, setMonitoringList] = useRecoilState(monitoringListState);

  if (monitoringList.length === 0)
  {
    return (
      <Container>
        <EmptyNotice1>{getString('monitoring.empty1')}</EmptyNotice1>
        <EmptyNotice2>{getString('monitoring.empty2')}</EmptyNotice2>
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
                  new IVInfoCrtDto(ringer.ivTotalAmount, ringer.ivPeriod, ringer.ivSpeed), SubscribeType.GEST)]);
              setRlModalVisible(false);
            }
          }}
          onClose={() => setRlModalVisible(false)}
        />
        <MonitoringSettingModal
          visible={rlSetModalVisible}
          onComplate={(dto: IVInfoCrtDto): void =>
          {
            settingRinger && setMonitoringList([...monitoringList,
              new RingerInjection(settingRinger.sn, settingRinger.name, 0, 0, 0, 0, 0, 0, dto, SubscribeType.HOST)]);
            setRlSetModalVisible(false);
          }}
          onClose={() => setRlSetModalVisible(false)}
        />
      </Container>
    );
  }

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
                new IVInfoCrtDto(ringer.ivTotalAmount, ringer.ivPeriod, ringer.ivSpeed), SubscribeType.GEST)]);
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
            new RingerInjection(settingRinger.sn, settingRinger.name, 0, 0, 0, 0, 0, 0, dto, SubscribeType.HOST)]);
          setRlSetModalVisible(false);
        }}
        onClose={() => setRlSetModalVisible(false)}
      />
    </Container>
  );
};

export default RingerListLayout;

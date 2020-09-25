import * as React from 'react';

import { DefaultStyledProps, koFont } from 'src/theme';

import { ListSeperator } from '../molecules/Styled';
import { Modal } from 'react-native';
import ModalHeader from '../molecules/ModalHeader';
import { RINGER_LIST } from 'src/apollo/query';
import { Ringer } from 'src/container/ringer/create/type';
import RingerListItem from '../organisms/RingerListItem';
import { monitoringListState } from 'src/container/ringer/monitoring/store';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.5);
  /* width: 100px;
  height: 100px; */
`;
const Contents = styled.View<DefaultStyledProps>`
  background-color: white;
  width: 90%;
  height: 80%;
  border-radius: 4px;
`;
const StyledScrollView = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    backgroundColor: props.theme.primaryLight,
    margin: 10,
    borderRadius: 20
  }
}))`
  border-radius: 20px;
  margin-bottom: 20px;
`;
const Notice = styled.Text``;
const Header = styled.View`
  font-family: ${koFont.FontBatang};
  flex-direction: row;
  justify-content: space-around;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
`;
const HeaderText = styled.Text`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
`;
const StatusHeader = styled(HeaderText)`
  width: 25%;
`;
const SNHeader = styled(HeaderText)`
  width: 35%;
`;
const NameHeader = styled(HeaderText)`
  width: 40%;
`;

interface Props {
  visible: boolean;
  onSelectRinger: (ringer: Ringer) => void;
  onClose: () => void;
}
const SelectRingerListModal:React.FC<Props> = (props): React.ReactElement =>
{
  React.useEffect(() =>
  {
    setVisible(props.visible);
    if (props.visible)
    {
      ringersRsp?.refetch && ringersRsp.refetch();
    }
  }, [props.visible]);

  /**
   * Server Stats
   */
  const ringersRsp = useQuery(RINGER_LIST, {
    onError: (error) =>
    {
      console.error(error);
    }
  });

  /**
   * UI Stats
   */
  const ringerList = ringersRsp.data?.ringers || [];
  const [visible, setVisible] = React.useState(props.visible);
  const monitoringList = useRecoilValue(monitoringListState);
  const monitoringSNList = monitoringList.map((monitoring) => monitoring.lingerSN);
  const filteredRingerList = ringerList.filter((ringer: Ringer) => !monitoringSNList.includes(ringer.sn));

  return (
    <Modal
      visible={visible}
      onRequestClose={() => props.onClose()}
      transparent={true}
    >
      <Container>
        <Contents>
          <ModalHeader rightActionText="닫기" onClickRightAction={() => props.onClose()} />
          <Header>
            <StatusHeader>상태</StatusHeader>
            <SNHeader>시리얼넘버</SNHeader>
            <NameHeader>링거명</NameHeader>
          </Header>
          <StyledScrollView>
            {filteredRingerList.map((ringer: Ringer, index: number) =>
              <React.Fragment key={`KEY_${index}`}>
                <RingerListItem item={ringer}
                  onPress={() =>
                  {
                    props.onSelectRinger(ringer);
                    props.onClose();
                  }}
                />
                {index < filteredRingerList.length - 1 && <ListSeperator /> }
              </React.Fragment>)}
          </StyledScrollView>
        </Contents>
      </Container>
    </Modal>
  );
};

export default SelectRingerListModal;

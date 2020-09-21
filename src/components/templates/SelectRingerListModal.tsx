import * as React from 'react';

import { Modal } from 'react-native';
import ModalHeader from '../molecules/ModalHeader';
import { RINGER_LIST } from 'src/apollo/query';
import { Ringer } from 'src/container/ringer/create/type';
import RingerListItem from '../organisms/RingerListItem';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/client';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.5);
  /* width: 100px;
  height: 100px; */
`;
const Contents = styled.View`
  background-color: white;
  width: 80%;
  height: 80%;
`;
const StyledScrollView = styled.ScrollView``;
const Notice = styled.Text``;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-left: 15px;
  padding-right: 15px;
`;
const HeaderText = styled.Text`
  text-align: center;
  font-size: 21px;
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
  const ringersRsp = useQuery(RINGER_LIST);
  const ringerList = ringersRsp.data?.ringers || [];
  const [visible, setVisible] = React.useState(props.visible);

  React.useEffect(() =>
  {
    setVisible(props.visible);
    if (props.visible)
    {
      ringersRsp.refetch();
    }
  }, [props.visible]);

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
          <Notice>(모니터링중인 링거는 뺄 예정 입니다)</Notice>
          <StyledScrollView>
            {ringerList.map((ringer: Ringer, index: number) =>
              <RingerListItem key={`KEY_${index}`} item={ringer}
                onPress={() =>
                {
                  props.onSelectRinger(ringer);
                  props.onClose();
                }}
              />)}
          </StyledScrollView>
        </Contents>
      </Container>
    </Modal>
  );
};

export default SelectRingerListModal;

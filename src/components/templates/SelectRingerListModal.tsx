import * as React from 'react';

import { Modal } from 'react-native';
import { RINGER_LIST } from 'src/apollo/query';
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
  }, [props.visible]);

  return (
    <Modal
      visible={visible}
      onRequestClose={() => props.onClose()}
      transparent={true}
    >
      <Container>
        <Contents>
          {ringerList.map((ringer, index) =>
            <RingerListItem key={`KEY_${index}`} item={ringer} onPress={() =>
            { props.onSelectRinger(ringer); props.onClose() }} />)}
        </Contents>
      </Container>
    </Modal>
  );
};

export default SelectRingerListModal;

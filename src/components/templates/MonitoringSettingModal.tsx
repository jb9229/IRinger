import * as React from 'react';

import { Button, Modal } from 'react-native';

import { EditText } from 'dooboo-ui';
import ModalHeader from '../molecules/ModalHeader';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.5);
  /* width: 100px;
  height: 100px; */
`;
const Contents = styled.View`
  padding: 10px;
  background-color: white;
  width: 80%;
  height: 80%;
`;
const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;

const StyledEditText = styled(EditText)`
  margin-top: 30px;
`;

const CancelButton = styled(Button)`
`;
const SubmitButton = styled(Button)`
`;

interface Props {
  visible: boolean;
  onComplate: () => void;
  onClose: () => void;
}
const MonitoringSettingModal:React.FC<Props> = (props): React.ReactElement =>
{
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
          <ModalHeader rightActionText="닫기" onClickRightAction={() => props.onClose()} />
          <StyledEditText label="총 투여량" />
          <StyledEditText label="투여 시간" />
          <Footer>
            <Button title="취소" onPress={props.onClose} />
            <Button title="제출" onPress={props.onComplate} />
          </Footer>
        </Contents>
      </Container>
    </Modal>
  );
};

export default MonitoringSettingModal;

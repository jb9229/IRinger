import * as React from 'react';

import { Button, Modal } from 'react-native';

import { EditText } from 'dooboo-ui';
import { IVInfoCrtDto } from 'src/container/ringer/types';
import ModalHeader from '../molecules/ModalHeader';
import { isNumeric } from 'src/utils/NumberUtils';
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

interface Props {
  visible: boolean;
  onComplate: (dto: IVInfoCrtDto) => void;
  onClose: () => void;
}
const MonitoringSettingModal:React.FC<Props> = (props): React.ReactElement =>
{
  const [visible, setVisible] = React.useState(props.visible);
  const [dto, setDto] = React.useState<IVInfoCrtDto>(new IVInfoCrtDto(0, 0, 0));

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
          <StyledEditText
            label="총 투여량"
            onChangeText={(text) => { if (isNumeric(text)) { dto.totalAmount = Number.parseFloat(text) } }}
          />
          <StyledEditText label="투여 시간"
            onChangeText={(text) => { if (isNumeric(text)) { dto.period = Number.parseFloat(text) } }}
          />
          <StyledEditText label="투여 속도"
            onChangeText={(text) => { if (isNumeric(text)) { dto.speed = Number.parseFloat(text) } }}
          />
          <Footer>
            <Button title="취소" onPress={props.onClose} />
            <Button title="제출" onPress={() => props.onComplate(dto)} />
          </Footer>
        </Contents>
      </Container>
    </Modal>
  );
};

export default MonitoringSettingModal;


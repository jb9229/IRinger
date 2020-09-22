import * as React from 'react';

import { Button, Modal } from 'react-native';
import { IVInfoCrtDto, IVInfoError } from 'src/container/ringer/types';

import { EditText } from 'dooboo-ui';
import ModalHeader from '../molecules/ModalHeader';
import { getString } from 'src/STRINGS';
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
  const [error, setError] = React.useState<IVInfoError>(new IVInfoError());

  React.useEffect(() =>
  {
    setVisible(props.visible);
  }, [props.visible]);

  const validate = (): boolean =>
  {
    const newError = new IVInfoError();
    let result = true;
    dto.totalAmount = Number.parseInt(dto.totalAmountStr);
    dto.period = Number.parseInt(dto.periodStr);
    dto.speed = Number.parseInt(dto.speedStr);

    if (!isNumeric(dto.totalAmount)) { newError.totalAmount = getString('validation.allowed_number'); result = false }
    if (!isNumeric(dto.period)) { newError.period = getString('validation.allowed_number'); result = false }
    if (!isNumeric(dto.speed)) { newError.speed = getString('validation.allowed_number'); result = false }

    setError(newError);
    return result;
  };

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
            keyboardType="decimal-pad"
            onChangeText={(text) => { dto.totalAmountStr = text }}
            errorText={error.totalAmount}
          />
          <StyledEditText
            label="투여 시간"
            keyboardType="decimal-pad"
            onChangeText={(text) => { dto.periodStr = text }}
            errorText={error.period}
          />
          <StyledEditText
            label="투여 속도"
            keyboardType="decimal-pad"
            onChangeText={(text) => { dto.speedStr = text }}
            errorText={error.speed}
          />
          <Footer>
            <Button title="취소" onPress={props.onClose} />
            <Button title="제출" onPress={() => { if (validate()) { props.onComplate(dto) } }} />
          </Footer>
        </Contents>
      </Container>
    </Modal>
  );
};

export default MonitoringSettingModal;


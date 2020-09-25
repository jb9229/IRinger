import * as React from 'react';

import { Button, Modal } from 'react-native';
import { IVInfoCrtDto, IVInfoError } from 'src/container/ringer/types';

import { DefaultStyledProps } from 'src/theme';
import { FormEditText } from '../atoms/TextInput/Form';
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
const Contents = styled.View<DefaultStyledProps>`
  background-color: ${(props) => props.theme.primaryLight};
  padding: 10px;
  width: 80%;
  height: 80%;
  border-radius: 4px;
`;
const Form = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 40
  }
}))`
  height: 300px;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`;
const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;

const StyledEditText = styled(FormEditText)`
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
    dto.speed = Number.parseFloat(dto.speedStr);

    if (!isNumeric(dto.totalAmount)) { newError.totalAmount = getString('validation.allowed_number'); result = false }
    if (!isNumeric(dto.period)) { newError.period = getString('validation.allowed_number'); result = false }
    if (!isNumeric(dto.speed)) { newError.speed = getString('validation.allowed_number'); result = false }
    if (dto.speedAlarmStr)
    {
      dto.speedAlarm = Number.parseInt(dto.speedAlarmStr);

      if (!isNumeric(dto.speedAlarm))
      {
        newError.speedAlarm = getString('validation.allowed_number'); result = false;
      }
    }

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
          <Form>
            <StyledEditText
              label="총 투여량"
              placeholder="투여할 총량을 입력해 주세요"
              keyboardType="decimal-pad"
              onChangeText={(text) => { dto.totalAmountStr = text }}
              errorText={error.totalAmount}
            />
            <StyledEditText
              label="투여 시간"
              placeholder="투여할 시간을 입력해 주세요"
              keyboardType="decimal-pad"
              onChangeText={(text) => { dto.periodStr = text }}
              errorText={error.period}
            />
            <StyledEditText
              label="투여 속도"
              placeholder="투여 속도 알림의 기준이 됩니다"
              keyboardType="decimal-pad"
              onChangeText={(text) => { dto.speedStr = text }}
              errorText={error.speed}
            />
            <StyledEditText
              label="투여 속도 알림 오차범위(옵션)"
              placeholder="3"
              keyboardType="decimal-pad"
              onChangeText={(text) => { dto.speedAlarmStr = text }}
              errorText={error.speedAlarm}
            />
            <StyledEditText
              label="투여량 알림(옵션, 분)"
              placeholder="30, 60"
              keyboardType="decimal-pad"
              onChangeText={(text) => { dto.amongAlarm = text }}
              errorText={error.amongAlarm}
            />
          </Form>
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


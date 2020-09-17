import * as React from 'react';

import styled, { DefaultTheme } from 'styled-components/native';

import { ScrollView } from 'react-native';

interface StyledProps{
  theme: DefaultTheme;
  disabled?: boolean;
}

const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  shadowColor: black;
  shadow-radius: 2px;
  shadow-offset: 0px 4px;
`;
const LeftContent = styled.View`
  width: 95px;
  padding-left: 10px;
`;
const CenterContent = styled.View`
  flex: 1;
  align-items: center;
`;
export const RightContent = styled.View`
  width: 95px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;
export const NaviTitle = styled.Text`
  color: black;
  font-size: 21px;
`;
export const RightActionTO = styled.TouchableOpacity`
`;
export const HeadActionButtonTO2 = styled.TouchableOpacity`
`;
export const RightActionText = styled.Text<StyledProps>`
  color: ${(props) => props.disabled ? props.theme.disabled : props.theme.primary};
  font-size: 17px;
`;

export enum NaviHeaderIconType {
  SHARE, PLUS
}

interface Props {
  rightActionText: string;
  iconType?: NaviHeaderIconType;
  scrollViewRef?: React.RefObject<ScrollView>;
  isScrolling?: boolean;
  onClickRightAction?: () => void;
}

const ModalHeader:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <HeaderView>
      <LeftContent>
      </LeftContent>

      <CenterContent>
      </CenterContent>

      <RightContent>
        {!!props.rightActionText && (
          <RightActionTO
            disabled={!props.onClickRightAction}
            hitSlop={{ left: 10, right: 10, top: 5, bottom: 5 }}
            onPress={props.onClickRightAction}
          >
            <RightActionText disabled={!props.onClickRightAction}>{props.rightActionText}</RightActionText>
          </RightActionTO>
        )}
      </RightContent>
    </HeaderView>
  );
};

export default ModalHeader;

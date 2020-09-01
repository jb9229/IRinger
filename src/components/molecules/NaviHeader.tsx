import * as React from 'react';

import { Animated, ScrollView } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

interface StyledProps{
  theme: DefaultTheme;
  disabled?: boolean;
  bookmarked?: boolean;
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
const NaveGobackTO = styled.TouchableOpacity`
  width: 30px;
`;
const NaviImage = styled.Image`
  
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
  title?: string;
  rightActionText: string;
  iconType?: NaviHeaderIconType;
  scrollViewRef?: React.RefObject<ScrollView>;
  isScrolling?: boolean;
  onClickNavi: () => void;
  onClickBookMark?: () => void;
  onClickIcon?: () => void;
  onClickRightAction?: () => void;
}

const NaviHeader: React.FC<Props> = (props) =>
{
  const headerShadowOpacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() =>
  {
    const toValue = props.isScrolling ? 1 : 0;
    Animated.timing(
      headerShadowOpacity,
      {
        useNativeDriver: true,
        toValue,
        duration: 300
      }
    ).start();
  }, [props.isScrolling]);

  return (
    <HeaderView
      as={Animated.View}
      style={{
        shadowOpacity: headerShadowOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.2]
        }),
        elevation: headerShadowOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 5]
        })
      }}
    >
      <LeftContent>
        <NaveGobackTO
          onPress={props.onClickNavi}
          hitSlop={{ left: 10, right: 10, top: 5, bottom: 5 }}
        >
          <NaviImage source={require('assets/icons/Back/back.png')} />
        </NaveGobackTO>
      </LeftContent>

      <CenterContent>
        {!!props.title && (<NaviTitle numberOfLines={1}>{props.title}</NaviTitle>)}
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

export default NaviHeader;

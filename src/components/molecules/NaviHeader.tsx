import * as React from 'react';

import { Animated, ScrollView } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

interface StyleProps{
  theme: DefaultTheme;
  buttonDisable?: boolean;
  bookmarked?: boolean;
}

const HeaderView = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50;
  shadowColor: black;
  shadow-radius: 2;
  shadow-offset: 0px 4px;
`;
const LeftContent = styled.View`
  width: 95;
  padding-left: 10;
`;
const CenterContent = styled.View`
  flex: 1;
  align-items: center;
`;
export const HeadRightContentWrap = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 95;
`;
export const NaviTitle = styled.Text`
  color: black;
`;
const NaveGobackTO = styled.TouchableOpacity`
  width: 30;
`;
const NaviImage = styled.Image`
  
`;
export const HeadActionButtonTO = styled.TouchableOpacity`
`;
export const HeadActionButtonTO2 = styled.TouchableOpacity`
`;
export const HeadActionButtonText = styled.Text`
  color: black;
`;

export enum NaviHeaderIconType {
  SHARE, PLUS
}

interface Props {
  title?: string;
  bookmark?: boolean;
  buttonText?: string;
  buttonText2?: string;
  iconType?: NaviHeaderIconType;
  scrollViewRef?: React.RefObject<ScrollView>;
  isScrolling?: boolean;
  onClickNavi: () => void;
  onClickBookMark?: () => void;
  onClickIcon?: () => void;
  onClickButton?: () => void;
  onClickButton2?: () => void;
}

const NaviHeader: React.FC<Props> = (props) => {
  const headerShadowOpacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() =>
  {
    const toValue = props.isScrolling ? 1 : 0;
    Animated.timing(
      headerShadowOpacity,
      {
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

      <HeadRightContentWrap>
      </HeadRightContentWrap>
    </HeaderView>
  );
};

export default NaviHeader;

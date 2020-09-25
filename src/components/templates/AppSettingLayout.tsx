import * as Linking from 'expo-linking';
import * as React from 'react';

import { BText, RText } from '../atoms/Text/StyledText';

import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { DefaultStyledProps } from 'src/theme';
import { ListLabel } from '../atoms/Text/ListLabel';
import { SEND_NOTIFICATION } from 'src/apollo/query';
import { TouchableOpacity } from 'react-native';
import { notificationTokenState } from 'src/container/signin/store';
import styled from 'styled-components/native';
import { useLazyQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Header = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
`;
const HeaderSeperator = styled.View<DefaultStyledProps>`
  height: 7px;
  background-color: ${(props) => props.theme.backgroundGray};
`;
const InfoSeperator = styled.View<DefaultStyledProps>`
  height: 1px;
  background-color: ${(props) => props.theme.backgroundGray};
`;
const Contents = styled.View`
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const InfoWrap = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
const InfoItemWrap = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-top-width: 1px;
`;
const Contact = styled.TouchableOpacity``;
const HeaderTitle = styled(RText)`
  margin-top: 20px;
  font-size: 20px;
`;
const InfoTitle = styled(BText)`
  font-weight: bold;
  margin-bottom: 20px;
`;
const StyledListLabel = styled(ListLabel)`
  width: 100px;
`;
const StyledListText = styled(RText)``;
const StyledListUnderlineText = styled(StyledListText)`
  text-decoration: underline;
`;

/**
 * 
 */
const AppSettingLayout:React.FC = (): React.ReactElement =>
{
  const releaseMode = Constants.manifest.slug?.split('_')[1] || 'unknown';
  const notificationToken = useRecoilValue(notificationTokenState);
  const [sendNotificationReq, sendNotificationRsp] = useLazyQuery(SEND_NOTIFICATION, {
    fetchPolicy: 'network-only'
  });

  return (
    <Container>
      <Header>
        <AntDesign name="login" size={32} color="green" />
        <HeaderTitle>가입 하기 ></HeaderTitle>
      </Header>
      <HeaderSeperator/>
      <Contents>
        <InfoWrap>
          <InfoTitle>앱 정보</InfoTitle>
          <InfoItemWrap>
            <StyledListLabel>버전</StyledListLabel>
            <StyledListText>{`${Constants.manifest.version}_${releaseMode}`}</StyledListText>
          </InfoItemWrap>
          <InfoItemWrap>
            <StyledListLabel>알림토큰</StyledListLabel>
              <TouchableOpacity onPress={() => sendNotificationReq({ variables: { nTokenList: [notificationToken] } })}>
              <StyledListUnderlineText selectable={true} numberOfLines={1} ellipsizeMode="tail">{notificationToken}</StyledListUnderlineText>
            </TouchableOpacity>
          </InfoItemWrap>
        </InfoWrap>
        <InfoSeperator/>
        <InfoWrap>
          <InfoTitle>고객센터</InfoTitle>
          <InfoItemWrap>
            <StyledListLabel>이메일</StyledListLabel>
            <Contact onPress={() => Linking.openURL('mailto:dev@shinsungtk.com')}>
              <StyledListUnderlineText>support@shinsungtk.com</StyledListUnderlineText>
            </Contact>
          </InfoItemWrap>
        </InfoWrap>
      </Contents>
    </Container>
  );
};

export default AppSettingLayout;

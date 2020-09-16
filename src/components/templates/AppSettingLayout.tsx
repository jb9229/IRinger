import * as Linking from 'expo-linking';
import * as React from 'react';

import Constants from 'expo-constants';
import { SEND_NOTIFICATION } from 'src/apollo/query';
import { TouchableOpacity } from 'react-native';
import { notificationTokenState } from 'src/container/signin/store';
import styled from 'styled-components/native';
import { useLazyQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';

const Container = styled.View`
  flex: 1;
`;

const Contents = styled.View`
  flex: 1;
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
const ContactWrap = styled.View``;
const VersionWrap = styled.View`
  flex-direction: row;
`;
const Contact = styled.TouchableOpacity``;
const ContactText = styled.Text``;
const VersionLabel = styled.Text``;
const Version = styled.Text``;

const AppSettingLayout:React.FC = (): React.ReactElement =>
{
  const releaseMode = Constants.manifest.slug?.split('_')[1] || 'unknown';
  const notificationToken = useRecoilValue(notificationTokenState);
  const [sendNotificationReq, sendNotificationRsp] = useLazyQuery(SEND_NOTIFICATION, {
    fetchPolicy: 'network-only'
  });

  return (
    <Container>
      <Contents>
        <ContactText>노바 병원</ContactText>
        <ContactText>가입 하기</ContactText>
        <TouchableOpacity onPress={() => sendNotificationReq({ variables: { nTokenList: [notificationToken] } })}>
          <ContactText selectable={true}>{notificationToken}</ContactText>
        </TouchableOpacity>
      </Contents>
      <Footer>
        <ContactWrap>
          <Contact onPress={() => Linking.openURL('mailto:dev@shinsungtk.com')}>
            <ContactText>support@shinsungtk.com</ContactText>
          </Contact>
        </ContactWrap>
        <VersionWrap>
          <VersionLabel>Version: </VersionLabel>
          <Version>{`${Constants.manifest.version}_${releaseMode}`}</Version>
        </VersionWrap>
      </Footer>
    </Container>
  );
};

export default AppSettingLayout;

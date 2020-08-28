import * as Linking from 'expo-linking';
import * as React from 'react';

import styled from 'styled-components/native';

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

const AppSettingLayout:React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Contents>
        <ContactText>가입하기</ContactText>
      </Contents>
      <Footer>
        <ContactWrap>
          <Contact onPress={() => Linking.openURL('mailto:dev@shinsungtk.com')}>
            <ContactText>support@shinsungtk.com</ContactText>
          </Contact>
        </ContactWrap>
        <VersionWrap>
          <VersionLabel>Version: </VersionLabel>
          <Version>v0.0.0</Version>
        </VersionWrap>
      </Footer>
    </Container>
  );
};

export default AppSettingLayout;

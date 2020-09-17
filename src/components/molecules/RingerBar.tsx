import * as React from 'react';

import styled from 'styled-components/native';

interface StyledProps {
  percent: number;
}

const Container = styled.View`
  width: 50px;
  height: 50px;
  border-width: 1px;
`;
const BarWrap = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
const Bar = styled.View<StyledProps>`
  height: ${(props) => 50 * (props.percent / 100)}px;
  background-color: ${(props) => props.theme.primary};
`;

interface Props {
  percent: number;
}

const RingerBar:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <Container>
      <BarWrap>
        <Bar percent={props.percent}/>
      </BarWrap>
    </Container>
  );
};

export default RingerBar;

import { gql } from '@apollo/client';

export const MI_SUBSCRIPTION = gql`
  subscription MonitoringInjection {
    monitoringInjection {
      sn
      restAmong
      gtt
      battery
    }
  }
`;

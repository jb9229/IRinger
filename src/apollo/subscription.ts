import { gql } from '@apollo/client';

export const MI_SUBSCRIPTION = gql`
  subscription MonitoringInjection($dto: MonitoringParmas) {
    monitoringInjection(dto: $dto) {
      sn
      restAmong
      gtt
      battery
    }
  }
`;

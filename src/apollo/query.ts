import { gql } from '@apollo/client';

export const RINGER_LIST = gql`
  query {
    ringers {
      sn
      name
      ivTotalAmount
    }
  }
`;

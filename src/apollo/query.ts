import { gql } from '@apollo/client';

export const RINGER_LIST = gql`
  query {
    ringers {
      sn
      name
      ivTotalAmount
      status
    }
  }
`;

export const SEND_NOTIFICATION = gql`
  query SendNotification($nTokenList: [String]){
    sendNotification(nTokenList: $nTokenList)
  }
`;

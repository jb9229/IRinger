import { gql } from '@apollo/client';

export const CREATE_RINGER = gql`
  mutation CreateRinger($dto: CreateRingerDto) {
    createRinger(dto: $dto) {
      name
      sn
      ivTotalAmount
    }
  }
`;

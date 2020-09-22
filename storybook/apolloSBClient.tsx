import * as React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache, from } from "@apollo/client";

import { MI_SUBSCRIPTION } from "src/apollo/subscription";
import { MockedProvider } from '@apollo/client/testing';

const salon = { id: 'salon_dummy_id'};
const customerTicketListMock = [ { id: 'ticket_dummy_id' } ]

const queries = [
  {
    request: {
      query: MI_SUBSCRIPTION,
      variables: {
        dto:
        { sn: 'IRinger777', totalAmong: 100, period: 30 }
      }
    },
    result: {
      data: {
        monitoringInjection: { sn: 'IRinger777', gtt: 34, restAmong: 100, battery: 98 }
      }
    }
  }
];


const client = new ApolloClient({
  link: from([]),
  cache: new InMemoryCache(),
});

export const SBMockApolloProvider = ({ children }: { children: any }) => (
  <ApolloProvider client={client}>
    <MockedProvider mocks={queries} addTypename={false}>
      {children}
    </MockedProvider>
  </ApolloProvider>
);
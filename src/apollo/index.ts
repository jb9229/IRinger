import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from, split } from '@apollo/client';

import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const NODE_SERVER_URL_LOCAL = 'http://localhost:8080/graphql';
const NODE_SERVER_WEBSOCKET_URL_LOCAL = 'ws://localhost:4500/graphql';
const NODE_SERVER_URL_ALPHA = 'https://iringer-server.azurewebsites.net/graphql';
const NODE_SERVER_WEBSOCKET_URL_ALPHA = 'ws://iringer-server.azurewebsites.net/graphql';

const NODE_SERVER_URL = process.env.BUILD_TYPE === 'dev' ? NODE_SERVER_URL_LOCAL : NODE_SERVER_URL_ALPHA;
const NODE_SERVER_WEBSOCKET_URL =
  process.env.BUILD_TYPE === 'dev' ? NODE_SERVER_WEBSOCKET_URL_LOCAL : NODE_SERVER_WEBSOCKET_URL_ALPHA;

console.log('>>> NODE_SERVER_URL: ', NODE_SERVER_URL);
const httpLink = new HttpLink({
  uri: NODE_SERVER_URL
});

const wsLink = new WebSocketLink({
  uri: NODE_SERVER_WEBSOCKET_URL,
  options: {
    reconnect: true
  }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) =>
  {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

// const logLink = new ApolloLink((operation, forward) =>
// {
//   // console.time(operation.operationName);

//   return forward(operation).map((result) =>
//   {
//     // console.timeEnd(operation.operationName);
//     return result;
//   });
// });

// const timeStartLink = new ApolloLink((operation, forward) =>
// {
//   operation.setContext({ start: new Date() });
//   console.log(operation.operationName);
//   return forward(operation);
// });

const timeStartLink = new ApolloLink((operation, forward) =>
{
  operation.setContext({ start: new Date() });
  return forward(operation);
});

const logTimeLink = new ApolloLink((operation, forward) =>
{
  if (operation.operationName && forward)
  {
    console.log('>>> operation: ', operation)
    console.log('>>> forward: ', forward)
    return forward(operation).map((data) =>
    {
      // data from a previous link
      const time = new Date() - operation.getContext().start;
      console.log(`operation ${operation.operationName} took ${time} to complete`);
      return data;
    });
  }
  else
  {
    return forward(operation);
  }
});

const link = timeStartLink.concat(logTimeLink);

// const link = new ApolloLink((operation, forward) =>
// {
// const { saveOffline } = operation.getContext();
//   if (saveOffline) // do offline stuff
//   return forward(operation);
// })

const consoleLink = new ApolloLink((operation, forward) =>
{
  console.log(`starting request for ${operation.operationName}`);
  console.log('starting request for variables: ', operation?.variables);
  return forward(operation).map && forward(operation).map((data) =>
  {
    console.log(`ending request for ${operation.operationName}`);
    console.log('ending request for data: ', data);
    return data;
  });
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(
  ),
  link: from([consoleLink, splitLink])
});

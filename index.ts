// import { ApolloServer, PubSub } from 'apollo-server';
// import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLServer } from 'graphql-yoga';
import gqlServerConfig from './api';

const serverOptions = {
    port: 5000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/docs',
    tracing: true,
    debug: true
  }
  console.log(process);
const server = new GraphQLServer(gqlServerConfig)
server.start(serverOptions, ({port}) => console.log(`Server on port ${port}`))

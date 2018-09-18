// import { ApolloServer, PubSub } from 'apollo-server';
// import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLServer } from 'graphql-yoga';
import gqlServerConfig from './api';

const serverOptions = {
    port: process.env.PORT || 5000,
    endpoint: '/graphql',
    playground: '/docs',
    tracing: true,
    debug: true
  }

const server = new GraphQLServer(gqlServerConfig)
server.start(serverOptions, ({port}) => console.log(`Server on port ${port}`))

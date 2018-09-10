const { ApolloServer, PubSub } = require('apollo-server');
import {makeExecutableSchema} from 'graphql-tools';

import typeDefs from './schema' 
import resolvers from './resolvers' 

const messages = require('./data/messages');
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
const pubsub = new PubSub();

const context = {
    messages,
    pubsub
};

const server = new ApolloServer({
    schema,
    context
});

server.listen()
    .then(({ url }) => {
        console.log(`Server running at ${url}`);
    });

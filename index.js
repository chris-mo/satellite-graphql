import { ApolloServer, PubSub } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './schema';

import resolvers from './resolvers' 
import messages from './data/messages';

const executableSchema = makeExecutableSchema({
    typeDefs: [schema],
    resolvers
})

const pubsub = new PubSub();

const context = {
    messages,
    pubsub
};

const server = new ApolloServer({
    schema: executableSchema,
    context
});

server.listen()
    .then(({ url }) => {
        console.log(`Server running at ${url}`);
    });

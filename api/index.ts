import { PubSub } from 'graphql-yoga';
const pubsub = new PubSub();
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const gqlServerConfig = {
    typeDefs,
    resolvers,
    context:{
        pubsub
    }
}

export default gqlServerConfig;

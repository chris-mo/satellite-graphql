import gqlLoader from './utils/gqlLoader';
import resolvers from './resolvers';
import { PubSub } from 'graphql-yoga';

const pubsub = new PubSub();
const satellite = gqlLoader('./typeDefs/satellite.graphql');
const foaas = gqlLoader('./typeDefs/foaas.graphql');
const randomUser = gqlLoader('./typeDefs/randomUser.graphql');

const gqlServerConfig = {
    typeDefs: [satellite, foaas, randomUser].join (' '),
    resolvers: resolvers,
    context: { pubsub }
}

export default gqlServerConfig;

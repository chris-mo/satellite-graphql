import gqlLoader from './utils/gqlLoader';
import resolvers from './resolvers';

const satellite = gqlLoader('./typeDefs/satellite.graphql');
const foaas = gqlLoader('./typeDefs/foaas.graphql');
const randomUser = gqlLoader('./typeDefs/randomUser.graphql');

const gqlServerConfig = {
    typeDefs: [satellite, foaas, randomUser].join (' '),
    resolvers: resolvers
}

export default gqlServerConfig;

import gqlLoader from '../utils/gqlLoader';

const satellite = gqlLoader('./typeDefs/satellite.graphql');
const foaas = gqlLoader('./typeDefs/foaas.graphql');
const randomUser = gqlLoader('./typeDefs/randomUser.graphql');
const constructor = gqlLoader('./typeDefs/constructor.graphql');

const allTypeDefs = [
    constructor,
    satellite,
    foaas,
    randomUser,
];

const typeDefs = allTypeDefs.join (' ');

export default typeDefs;

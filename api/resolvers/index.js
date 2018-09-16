import satelliteResolvers from './satelliteResolvers';
import foaasResolvers from './foaasResolvers';
import randomUserResolver from './randomUserResolvers';

var merge = require('merge-deep');

const allResolvers = [
    foaasResolvers,
    satelliteResolvers,
    randomUserResolver
];

let resolvers = {}

allResolvers.forEach(res => {
    resolvers = merge(resolvers, res);
})

export default resolvers;

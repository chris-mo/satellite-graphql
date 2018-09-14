import satelliteResolvers from './satelliteResolvers';
import swapiResolvers from './swapiResolvers';
import foaasResolvers from './foaasResolvers';
import randomUserResolver from './randomUserResolvers';

var merge = require('merge-deep');

const allResolvers = [
    foaasResolvers,
    swapiResolvers,
    satelliteResolvers,
    randomUserResolver
];

let resolvers = {}

allResolvers.forEach(res => {
    resolvers = merge(resolvers, res);
})

export default resolvers;

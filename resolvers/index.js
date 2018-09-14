import satelliteResolvers from './satelliteResolvers';
import swapiResolvers from './swapiResolvers';

const allResolvers = [swapiResolvers, satelliteResolvers];

let allQueries= allResolvers.reduce((current, accumulator)=> {
    console.log('current', current)
    console.log('accumulator',accumulator)
   return Object.assign({}, accumulator.Query, current.Query)
});

console.log(allQueries)


let allMutations = allResolvers.reduce((current, accumulator) => {
    return Object.assign({}, accumulator.Mutation, current.Mutation)
});

let allSubscriptions = allResolvers.reduce((current, accumulator) => {
    return Object.assign({}, accumulator.Subscription, current.Subscription)
});

const resolvers = {
    Query: allQueries,
    Mutation: allMutations,
    Subscription: allSubscriptions
}

export default resolvers;
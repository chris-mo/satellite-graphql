import satelliteResolvers from './satelliteResolvers';
import swapiResolvers from './swapiResolvers';
import foaasResolvers from './foaasResolvers';
import randomUserResolver from './randomUserResolvers';

const allResolvers = [
    foaasResolvers,
    swapiResolvers,
    satelliteResolvers,
    randomUserResolver
];

let allQueries, allMutations, allSubscriptions = {};

for(let resolver of allResolvers) {
    let keys = Object.keys(resolver);
    
    keys.forEach(key=>{
        console.log(resolver[key])
        if(key === 'Query'){
            let singleResolver = resolver[key];
            let tags = Object.keys(singleResolver);
            tags.forEach(tag => {
            Object.assign({}, allQueries, resolver[key][tag]);
            })
        }
        if(key === 'Mutation'){
            let singleResolver = resolver[key];
            let tags = Object.keys(singleResolver);
            tags.forEach(tag => {
            Object.assign({}, allMutations, resolver[key][tag]);
            })
        }
        if(key === 'Subscription'){
            let singleResolver = resolver[key];
            let tags = Object.keys(singleResolver);
            tags.forEach(tag => {
            Object.assign({}, allSubscriptions, resolver[key][tag]);
            })
        }
    })
}


// let allQueries= allResolvers.reduce((current, accumulator)=> {
//    return Object.assign({}, accumulator.Query, current.Query)
// });

// let allMutations = allResolvers.reduce((current, accumulator) => {
//     return Object.assign({}, accumulator.Mutation, current.Mutation)
// });

// let allSubscriptions = allResolvers.reduce((current, accumulator) => {
//     return Object.assign({}, accumulator.Subscription, current.Subscription)
// });

// const mergeResolvers = (objectType) => {
//     return allResolvers.reduce((current, accumulator) => {
//         return Object.assign({}, accumulator[objectType], current[objectType])
//     });
// }

// const allQueries = mergeResolvers('Query');
// const allMutations = mergeResolvers('Mutation');
// const allSubscriptions = mergeResolvers('Subscription');

const resolvers = {
    Query: allQueries,
    Mutation: allMutations,
    Subscription: allSubscriptions
}

console.log(resolvers);
export default resolvers;

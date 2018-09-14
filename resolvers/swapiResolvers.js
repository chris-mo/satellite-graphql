import fetch from 'node-fetch';
const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
const baseUrl = 'https://swapi.co/api/people/2';

const swapiResolvers = {
    Query: {
        getPerson: () => {
            return fetch(baseUrl)
                .then((res)=>{
                    return res.json();
                })
        }
    }
};

export default swapiResolvers;
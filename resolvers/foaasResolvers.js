import fetch from 'node-fetch';
import { PubSub } from 'apollo-server';
const pubsub = new PubSub();

const baseUrl = 'https://www.foaas.com';
const options = {
    headers: {
        'Accept': 'application/json'
    }
};

const foaasResolvers = {
    Query: {
        getAnyway: () => {
            return fetch(`${baseUrl}/anyway/Akshar/Kenny`, options)
                .then((res) => {
                    return res.json();
                });
        },
        getBirthday: () => {
            return fetch(`${baseUrl}/bday/Kenny/Akshar`, options)
                .then((res) => res.json());
        },
        getParticular: () => {
            return fetch(`${baseUrl}/particular/redux/Akshar`, options)
                .then((res) => res.json());
        },
        getProgrammer: () => {
            return fetch(`${baseUrl}/programmer/John`, options)
                .then((res) => res.json());
        },
        getPulp: () => {
            return fetch(`${baseUrl}/pulp/GraphQL/Akshar`, options)
                .then((res) => res.json());
        },
    }
};

export default foaasResolvers;
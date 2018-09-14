import fetch from 'node-fetch';
import { PubSub } from 'apollo-server';
const pubsub = new PubSub();

const baseUrl = 'www.foaas.com';

const foaasResolvers = {
    Query: {
        getAnyway: () => {
            return fetch(`${baseUrl}/anyway/Akshar/Kenny`)
                .then((res) => {
                    return res.json();
                });
        },
        getBirthday: () => {
            return fetch(`${baseUrl}/bday/Kenny/Akshar`)
                .then((res) => res.json());
        },
        getParticular: () => {
            return fetch(`${baseUrl}/particular/redux/Akshar`)
                .then((res) => res.json());
        }
    }
};

export default foaasResolvers;
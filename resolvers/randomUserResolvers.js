import fetch from 'node-fetch';

const  baseUrl = 'https://randomuser.me/api/';

const randomUserResolver = {
    Query: {
        getUser: () => {
            return fetch(baseUrl)
                .then((res) => {
                    const json = res.json();
                    return json;
                })
                .then((res) => {
                    return res.results[0]
                })
        }
    }
}   

export default randomUserResolver;
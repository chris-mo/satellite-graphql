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
                    console.log(res);
                })
        }
    }
}   

export default randomUserResolver;
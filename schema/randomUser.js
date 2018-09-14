const randomUser = `
    type RandomUser {
        gender: String!
        first: String!
        last: String!
    }

    extend type Query {
        getUser: RandomUser!
    }
`;

export default randomUser;
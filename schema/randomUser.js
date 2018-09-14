const randomUser = `
    type RandomUser {
        gender: String!
        name: Name!
        location: Location!
    }

    type Name {
        title: String!
        first: String!
        last: String
    }

    type Location {
        street: String!
        city: String!
        state: String!
        postcode: String!
        coordinates: Coordinates!
    }

    type Coordinates {
        latitude: String!
        longitude: String!
    }

    extend type Query {
        getUser: RandomUser!
    }
`;

export default randomUser;
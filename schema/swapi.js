const swapiSchema = `
        type Person {
            name: String!
            gender: String!
            skin_color: String
        }

        extend type Query {
            getPerson: Person!
        }
    `;

export default swapiSchema;

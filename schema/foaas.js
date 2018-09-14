const foaasSchema = `
    type Foaas {
        message: String!
        subtitle: String!
    }

    extend type Query {
        getAnyway: Foaas!
        getBirthday: Foaas!
        getParticular: Foaas!
        getProgrammer: Foaas!
        getPulp: Foaas!
    }
`;

export default foaasSchema;

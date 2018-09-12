const typeDefs = `
    type Message {
        id: ID!
        content: String!
        isOwner: Boolean!
        readStatus: Boolean!
    }

    type Query {
        allMessages: [Message!]!
    }

    type Lead {
        id: ID!
        messages: [Message]!
    }

    type Mutation {
        addMessage(content: String!): Message!
    }

    type Subscription {
        messageAdded: Message!
    }
`;

export default typeDefs;
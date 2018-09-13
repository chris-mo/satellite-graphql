const typeDefs = `
    type Message {
        id: ID!
        content: String!
        isOwner: Boolean!
        readStatus: Boolean!
    }

    type Lead {
        id: ID!
        messages: [Message]!
    }

    type Notifications {
        count: Int!
    }

    type Query {
        allMessages: [Message!]!
        notifications: Notifications!
    }

    type Mutation {
        addMessage(content: String!): Message!
        addNotification: Notifications!
    }

    type Subscription {
        messageAdded: Message!
        notificationAdded: Notifications!
    }
`;

export default typeDefs;
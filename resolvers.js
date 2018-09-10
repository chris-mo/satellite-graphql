const messages = require('./data/messages');
const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
const typeDefs = require ('./schema');

const resolvers = {
    Query: {
        allMessages: (root, args) => {
            return messages;
        }
    },
    Mutation: {
        addMessage: (root, { id, content }) => {
            let allMessages = messages;
            const newMessage = {
                id,
                content,
                isOwner: false,
                readStatus: false
            }
            allMessages.push(newMessage);

            pubsub.publish('messageAdded', {
                messageAdded: newMessage
            })
            return allMessages;
        }
    },
    Subscription: {
        messageAdded: {
            subscribe: () => pubsub.asyncIterator('messageAdded')
        }
    }
};

export default resolvers;
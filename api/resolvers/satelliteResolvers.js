const messages = require('../../data/messages');
const notifications = require('../../data/notifications');

const satelliteResolvers = {
    Query: {
        allMessages: (root, args) => {
            return messages;
        },
        notifications: (root, args) => {
            return notifications;
        }
    },
    Mutation: {
        addMessage: (root, { content }) => {
            let allMessages = messages;
            const newMessage = {
                id: allMessages.length + 1,
                content,
                isOwner: false,
                readStatus: false
            }
            allMessages.push(newMessage);

            // Subscription
            pubsub.publish('messageAdded', {
                messageAdded: newMessage
            })

            return newMessage;
        },
        addNotification: (root, args) => {
            const newCount = {
                count: ++notifications.count
            };

            // Subscription
            pubsub.publish('notificationAdded', {
                notificationAdded: newCount
            });

            return newCount;
        }
    },
    Subscription: {
        messageAdded: {
            subscribe: () => pubsub.asyncIterator('messageAdded')
        },
        notificationAdded: {
            subscribe: () => pubsub.asyncIterator('notificationAdded')
        }
    }
};

export default satelliteResolvers;

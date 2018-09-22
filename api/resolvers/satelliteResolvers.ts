import satelliteService from '../services/satelliteService';

const satelliteResolvers = {
    Query: {
        allMessages: (root, args) => satelliteService.getAllMessages(),
        notifications: (root, args) => satelliteService.getAllNotifications()
    },
    Mutation: {
        addMessage: (root, { content }, { pubsub }) => {
            let allMessages = satelliteService.getAllMessages();
            const newMessage = {
                id: allMessages.length + 1,
                content,
                isOwner: false,
                readStatus: false
            }
            allMessages.push(newMessage);

            pubsub.publish('messageAdded', {
                messageAdded: newMessage
            })
            return newMessage;
        },
        addNotification: (root, args, { pubsub } ) => {
            const notifications = satelliteService.getAllNotifications();
            const newCount = {
                count: ++notifications.count
            };

            pubsub.publish('notificationAdded', {
                notificationAdded: newCount
            });

            return newCount;
        }
    },
    Subscription: {
        messageAdded: {
            subscribe: (root, args, {pubsub}) => pubsub.asyncIterator('messageAdded')
        },
        notificationAdded: {
            subscribe: (root, args, {pubsub}) => pubsub.asyncIterator('notificationAdded')
        }
    }
};

export default satelliteResolvers;
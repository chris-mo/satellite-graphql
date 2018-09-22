import messages from '../../data/messages.js';
import notifications from '../../data/notifications.js';
const satelliteService = {
    getAllMessages: () => {
        return messages;
    },
    getAllNotifications: () => {
        return notifications;
    }
};

export default satelliteService;

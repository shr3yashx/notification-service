const { enqueue } = require('../queues/notificationQueue');
const emailProvider = require('../providers/emailProvider');
const smsProvider = require('../providers/smsProvider');
const inAppProvider = require('../providers/inAppProvider');

/**
 * Enqueue a notification for processing
 * @param {string} type - Notification type ('email', 'sms', 'inApp')
 * @param {string} userId - User ID to send notification to
 * @param {object} payload - Notification payload
 */
async function sendNotification(type, userId, payload) {
  const notification = { type, userId, payload };
  await enqueue(notification);
}

/**
 * Process a notification by sending it via the appropriate provider
 * @param {object} notification - Notification object
 */
async function processNotification(notification) {
  console.log("processNotification called with notification:", notification);
  const { type, userId, payload } = notification;
  try {
    switch (type) {
      case 'email':
        await emailProvider.sendEmail(userId, payload);
        break;
      case 'sms':
        await smsProvider.sendSMS(userId, payload);
        break;
      case 'inApp':
        await inAppProvider.sendInAppNotification(userId, payload);
        break;
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }
  } catch (error) {
    console.error("Error processing notification:", error.message);
    throw error;
  }
}

module.exports = {
  sendNotification,
  processNotification,
};

/**
 * Placeholder function to send an in-app notification
 * @param {string} userId - User ID to send in-app notification to
 * @param {object} payload - In-app notification content payload
 */
async function sendInAppNotification(userId, payload) {
  console.log("sendInAppNotification called with userId:", userId, "payload:", payload);
  // TODO: Integrate with real in-app notification service
  console.log("Sending in-app notification to user " + userId + " with payload:", payload);
}

module.exports = {
  sendInAppNotification,
};

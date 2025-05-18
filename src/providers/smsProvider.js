/**
 * Placeholder function to send an SMS notification
 * @param {string} userId - User ID to send SMS to
 * @param {object} payload - SMS content payload
 */
async function sendSMS(userId, payload) {
  console.log("sendSMS called with userId:", userId, "payload:", payload);
  // TODO: Integrate with real SMS service provider
  console.log("Sending SMS to user " + userId + " with payload:", payload);
}

module.exports = {
  sendSMS,
};

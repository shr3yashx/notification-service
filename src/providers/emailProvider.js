/**
 * Placeholder function to send an email notification
 * @param {string} userId - User ID to send email to
 * @param {object} payload - Email content payload
 */
async function sendEmail(userId, payload) {
  console.log("sendEmail called with userId:", userId, "payload:", payload);
  // TODO: Integrate with real email service provider
  console.log("Sending email to user " + userId + " with payload:", payload);
}

module.exports = {
  sendEmail,
};

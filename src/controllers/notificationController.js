// src/controllers/notificationController.js
const express = require('express');
const router = express.Router();

const { sendNotification, processNotification } = require('../services/notificationService');
const { consume } = require('../queues/notificationQueue');

// Route to receive notifications
router.post('/', async (req, res) => {
  const { type, userId, payload } = req.body;
  try {
    await sendNotification(type, userId, payload);
    res.status(202).json({ status: 'queued' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start consumer inside controller
(async () => {
  try {
    await consume(processNotification);
    console.log("✅ RabbitMQ consumer started");
  } catch (err) {
    console.error("❌ Error starting consumer:", err.message);
  }
})();

module.exports = router;

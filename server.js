// server.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

console.log("✅ Loading Express App...");

const app = express();
app.use(express.json());

try {
  console.log("✅ Loading Notification Controller...");
  const notificationRoutes = require('./src/controllers/notificationController');

  app.use('/notifications', notificationRoutes);

  app.get('/', (req, res) => res.send('Notification Service Running'));

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });
} catch (error) {
  console.error("❌ Error starting the server:", error.message);
}

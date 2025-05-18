// config/rabbitmq.js
const amqp = require('amqplib');
require('dotenv').config();

async function connect() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue(process.env.QUEUE_NAME, { durable: true });
  return channel;
}

module.exports = { connect }; // ✅ THIS is what makes it work

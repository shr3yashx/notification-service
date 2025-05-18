// src/queues/notificationQueue.js
const { connect } = require('../../config/rabbitmq');

async function enqueue(notification) {
  const channel = await connect();
  channel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(JSON.stringify(notification)), {
    persistent: true,
  });
}

async function consume(processFn) {
  const channel = await connect();
  await channel.consume(process.env.QUEUE_NAME, async (msg) => {
    const data = JSON.parse(msg.content.toString());
    try {
      await processFn(data);
      channel.ack(msg);
    } catch (err) {
      const retries = msg.properties.headers?.['x-retries'] || 0;
      if (retries < parseInt(process.env.RETRY_LIMIT, 10)) {
        channel.sendToQueue(process.env.QUEUE_NAME, msg.content, {
          headers: { 'x-retries': retries + 1 },
          persistent: true,
        });
      }
      channel.ack(msg);
    }
  });
}

module.exports = {
  enqueue,
  consume // 👈 VERY IMPORTANT: Make sure this line exists
};

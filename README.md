
# 🛎️ Notification Service

A backend service built to send **Email**, **SMS**, and **In-App Notifications** to users. Developed as part of an internship assignment with support for message queuing using RabbitMQ.

---

## 📌 Features

- ✅ Send notifications via:
  - 📧 Email
  - 📱 SMS
  - 🖥️ In-app
- ✅ REST API with Express.js
- ✅ RabbitMQ integration for asynchronous processing
- ✅ Modular codebase with provider architecture
- ✅ Environment variable-based configuration

---

## 📁 Project Structure

```
notification-service/
├── config/                 # RabbitMQ connection setup
├── src/
│   ├── controllers/        # Handles incoming API requests
│   ├── providers/          # Email, SMS, In-App logic
│   ├── queues/             # RabbitMQ publish/consume logic
│   └── services/           # Business logic layer
├── .env                    # Environment variables (ignored in git)
├── server.js               # Entry point
├── Dockerfile              # Containerization support (optional)
└── README.md               # You are here!
```

---

## 🚀 API Endpoints

### ➕ Send Notification

**POST** `/notifications`

**Request Body** :
```json
{
  "type": "in-app",
  "userId": "shreyash123",
  "payload": {
    "body": "You have mastered the Notification Service!"
  }
}
```

### 📥 Get User Notifications

**GET** `/users/:id/notifications`

**Response**:
```json
[
  {
    "type": "in-app",
    "payload": {
      "body": "You have mastered the Notification Service!"
    },
    "timestamp": "2025-05-18T09:30:00Z"
  }
]
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/notification-service.git
cd notification-service
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a `.env` File
```env
RABBITMQ_URL=amqp://localhost
QUEUE_NAME=notifications_queue
```

### 4. Start the Server
```bash
node server.js
```

> ✅ Make sure RabbitMQ is running locally or remotely (port `5672`, UI on `15672`).

---

## 🐳 Docker 

### Build & Run with Docker
```bash
docker build -t notification-service .
docker run -p 3000:3000 notification-service
```

### Or Use Docker Compose
```bash
docker-compose up
```

---

## 💡 Assumptions

- Messages are queued before delivery to allow for async processing.
- Basic error handling is in place; retry logic can be extended.
- Email, SMS, and In-App notification logic is abstracted via providers.


## 🔗 Deliverables

- ✅ GitHub Repo: Source code with README
- ✅ RabbitMQ used for message queueing
- 🚀 Optional deployment or Postman collection (if available)

---

## 👨‍💻 Author

**Shreyash**  
Internship Assignment Submission

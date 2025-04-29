# 💬 MERN Chat App

A full-featured real-time chat application built using the **MERN Stack**: MongoDB, Express.js, React.js, and Node.js. It supports user authentication with **JWT**, live messaging via **Socket.IO**, and has a responsive and intuitive frontend.

--

## 🔥 Features

- 🔐 Secure user registration and login with **JWT authentication**
- 💬 Real-time messaging using **Socket.IO**
- 🗃️ Store users and messages in **MongoDB**
- 🧾 RESTful API with **Express.js**
- 📱 Responsive frontend using **React.js**
- ✅ Protected routes for authenticated users
- 🌐 Online users list and typing indicator (optional)

---

## 🧠 Tech Stack

| Layer        | Technology |
|--------------|------------|
| Frontend     | React.js, Axios, Socket.IO-Client |
| Backend      | Node.js, Express.js, Socket.IO |
| Authentication | JWT (JSON Web Tokens) |
| Database     | MongoDB + Mongoose |

---

## 📁 Folder Structure

```
chat-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start the backend server:
```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## ⚙️ API Endpoints (Sample)

| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user and return token |
| GET    | `/api/users`         | Get all users |
| POST   | `/api/messages`      | Send a message |
| GET    | `/api/messages/:chatId` | Get messages of a chat |

---

## 🛡️ Authentication

- Uses JWT tokens for login/session management.
- Tokens are stored securely and validated in protected routes.

---

## 💬 Real-Time Messaging

- Real-time chat powered by **Socket.IO**
- Automatically updates chat windows when messages are sent or received
- Typing indicator and online users

---

## 📦 Dependencies

- **Frontend**: React, Axios, Socket.IO-client
- **Backend**: Express, Mongoose, Socket.IO, Bcrypt, JWT

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-xyz`)
3. Commit your changes
4. Push to the branch (`git push origin feature-xyz`)
5. Create a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

**Eyob Asefa**  
📧 eyobasefa623@gmail.com  
🌍 Dire Dawa, Ethiopia  

---

```


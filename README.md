# ChatApp VX

**ChatApp VX** is a real-time chat application built using the **MERN (MongoDB, Express, React, Node.js) stack**, with **Socket.io WebSockets** for real-time messaging. This application provides an interactive and seamless chatting experience with user authentication, message persistence, and a responsive UI.

## Features

- **Real-Time Messaging**: Instant communication using **Socket.io WebSockets**.
- **User Authentication**: Secure login and registration system.
- **Persistent Chat History**: Messages are stored in **MongoDB** for future access.
- **Typing Indicators**: See when other users are typing.
- **Online Status**: Users can see who is online in real time.
- **Responsive Design**: Optimized for mobile and desktop.
- **Scalable Architecture**: Designed to handle a growing number of users.

## Technologies Used

### **Frontend**
- [React](https://reactjs.org/) - Component-based UI framework.
- [Vite](https://vitejs.dev/) - Fast build tool for frontend development.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.

### **Backend**
- [Node.js](https://nodejs.org/) - JavaScript runtime for the server.
- [Express.js](https://expressjs.com/) - Lightweight Node.js web framework.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing user and message data.
- [Mongoose](https://mongoosejs.com/) - ODM for MongoDB.
- [Socket.io](https://socket.io/) - Real-time bidirectional event-based communication.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or use a cloud service like MongoDB Atlas)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SSC-SDE/chat-app-vx.git
   cd chat-app-vx
   ```

2. **Backend Setup**:

   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**:

   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

### **Backend Configuration**
1. Create a `.env` file inside the `backend` directory and add:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   - Replace `your_mongodb_connection_string` with your actual **MongoDB URI**.
   - Replace `your_jwt_secret` with a secure **JWT secret key**.

2. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

   - The backend will run on `http://localhost:5000`.

### **Frontend Configuration**
1. Update API endpoint in frontend config (if needed).

2. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

   - The frontend will run on `http://localhost:3000`.

## WebSocket Implementation

- The app uses **Socket.io** to handle real-time messaging.
- When a user sends a message, it is broadcasted in real-time to all connected users.
- Online status and typing indicators are handled through WebSocket events.

## Usage

1. **Access the Application**: Open `http://localhost:3000` in your browser.
2. **Register/Login**: Create an account or log in with existing credentials.
3. **Start Chatting**: Send and receive messages in real-time.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make changes and commit: `git commit -m 'Add some feature'`.
4. Push changes: `git push origin feature/your-feature-name`.
5. Open a **pull request**.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.io](https://socket.io/)

---

Let me know if you want any modifications! 🚀

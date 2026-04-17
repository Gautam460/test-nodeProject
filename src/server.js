const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');
const config = require('./config');
const { connection } = require('./config/db');
const socketHandler = require('./socket');

const PORT = config.port;

// Create HTTP server wrapping Express app
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// Pass io instance to our socket module
socketHandler(io);

const startServer = async () => {
  try {
    // Connect MySQL (SQL)
    await connection.getConnection();
    console.log('MySQL (Drizzle ORM) Connected');
    
    // Start Server
    server.listen(PORT, () => {
      console.log(`Server (and Socket.io) running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database connection failed!', error);
    process.exit(1);
  }
};

startServer();

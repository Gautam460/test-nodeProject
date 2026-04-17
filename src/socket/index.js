const logger = require('../utils/logger');

module.exports = (io) => {
    io.on('connection', (socket) => {
        logger.info(`Socket User connected: ${socket.id}`);

        // Handle a sample event from client
        socket.on('message', (msg) => {
            logger.info(`Message received: ${msg}`);
            // Broadcast to all other clients
            socket.broadcast.emit('message', msg);
        });

        socket.on('disconnect', () => {
            logger.info(`Socket User disconnected: ${socket.id}`);
        });
    });
};

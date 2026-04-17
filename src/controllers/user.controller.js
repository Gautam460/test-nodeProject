const { sqlDb } = require('../config/db');
const { users } = require('../models/user.schema');

// 👉 GET all users
exports.getUsers = async (req, res) => {
    try {
        const data = await sqlDb.select().from(users);
        res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

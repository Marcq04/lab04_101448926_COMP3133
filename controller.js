// Users Controller
const Users = require("./model");

// POST /users
const createUser = async (req, res) => {
    try {
        const data = req.body;
        if (!Array.isArray(data)) {
            data = [data];
        }
        const users = await Users.insertMany(data);
        res.status(201).json(users);
    } 
    catch (err) {
        console.error(err);
        if (err.name === "ValidationError") {
            return res.status(400).json({ errors: err.errors });
        }
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createUser
};

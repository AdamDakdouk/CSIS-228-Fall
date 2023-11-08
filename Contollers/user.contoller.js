const { validationResult } = require("express-validator");
const { loadUser, insertUser, updateUser, deleteUser } = require("../Services/user.services")

const getAllUsersController = async (req, res) => {
    try {
        const users = await loadUser();
        res.satus(200).json({ users });
    } catch (err) {
        res.status(500).json({ message: "Internal Error Occured. " });
    }
}

const insertUserController = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { user } = req.body; v

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const response = await insertUser(user);
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ error: "Error inserting user" });
    }
}

const updateUserController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { user } = req.body;

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    const response = await updateUser(user);
    res.status(200).json({ response });
}

const deleteUserController = async (req, res) => {
    const { user } = req.body;

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    const response = await deleteUser(user.user_id);
    res.status(200).json({ response });
}

module.exports = {
    getAllUsersController,
    insertUserController,
    updateUserController,
    deleteUserController,
}
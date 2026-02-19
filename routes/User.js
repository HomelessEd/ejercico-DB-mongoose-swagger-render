const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send({ message: "User successfully created", user });
    } catch (error) {
        res.status(500).send({ message: "Error creating user" });
    }
});

module.exports = router;
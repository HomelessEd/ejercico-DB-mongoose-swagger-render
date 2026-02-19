const express = require('express');
const router = express.Router();

const tasksRoutes = require('./tasks');
const usersRoutes = require('./User'); 

router.use('/tasks', tasksRoutes); 
router.use('/users', usersRoutes); 

module.exports = router;
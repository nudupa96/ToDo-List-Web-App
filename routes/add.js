//setup router
const express = require('express');
const router = express.Router();

//link update_controller and route
const addController = require('../controllers/add_controller');
//specify the route by accessing the controller action
router.post('/', addController.addtask);

console.log('Add Controller/Router Loaded!');

//export it to make it available outside
module.exports = router;

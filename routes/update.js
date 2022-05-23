//setup router
const express = require('express');
const router = express.Router();

//link update_controller and route
const updateController = require('../controllers/update_controller');
//specify the route by accessing the controller action
router.get('/update', updateController.update);

console.log('Update Controller/Router Loaded!');

//export it to make it available outside
module.exports = router;
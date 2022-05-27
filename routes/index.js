//setup router
const express = require('express');
const router = express.Router();

//link home controller and route
const homeController = require('../controllers/home_controller');
//specify the route by accessing the controller action
router.get('/', homeController.home);

router.post('/create-task', homeController.addtask);//define route and controller for adding a task

router.get('/delete-task', homeController.deletetask);//define route and controller for deleting a task

router.use('/update-task', require('./update'));//define route and controller for updating a task

console.log('Home Controller/Router Loaded!');

//export it to make it available outside
module.exports = router;
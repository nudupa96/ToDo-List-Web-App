//setup router
const express = require('express');
const router = express.Router();

//link home controller and route
const homeController = require('../controllers/home_controller');
//specify the route by accessing the controller action
router.get('/', homeController.home);

router.post('/create-task', homeController.addtask);//define route and controller for adding a task

//post is preferred for deleting as we are sending this data through a url, and 
//it'll be exposed if get method is used
router.post('/delete-task', homeController.deletetasks);//define route and controller for deleting a task

console.log('Home Controller/Router Loaded!');

//export it to make it available outside
module.exports = router;
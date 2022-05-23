//setup router
const express = require('express');
const router = express.Router();

//link home controller and route
const homeController = require('../controllers/home_controller');
//specify the route by accessing the controller action
router.get('/', homeController.home);

router.post('/create-task', homeController.addtask);

router.get('/delete-task', homeController.deletetask);

//now for accessing update route
router.use('/tasks', require('./update'));

console.log('Home Controller/Router Loaded!');

//export it to make it available outside
module.exports = router;
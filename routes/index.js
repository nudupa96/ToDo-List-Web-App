//setup router
const express = require('express');
const router = express.Router();

//link controller and route
const homeController = require('../controllers/home_controller');
//specify the route by accessing the controller action
router.get('/', homeController.home);

//export it to make it available outside
module.exports = router;
//setup router
const express = require('express');
const router = express.Router();

//link update_controller and route
const deleteController = require('../controllers/delete_controller');
//specify the route by accessing the controller action
router.post('/', deleteController.deletetask);

console.log('Delete Controller/Router Loaded!');

//export it to make it available outside
module.exports = router;
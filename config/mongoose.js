const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_web_app_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to MongoDB!'));

db.once('open', function(){
    console.log('Successfully Connected to MongoDB!');
});

module.exports = db;
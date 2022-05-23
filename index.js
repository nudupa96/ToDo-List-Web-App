const express = require('express');
const app = express();
const port = 8000;
//import the express-ejs-layouts lib
const expressLayouts = require('express-ejs-layouts');
//to read data input from form
const bodyParser = require('body-parser');

//link the mongoose lib for the db
const db = require('./config/mongoose');


//link the static files folder called assets
app.use(express.static('./assets'));

//need to use ejs layouts lib before routes  is required
app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//this MW for Data Handling from browser should be before routes MW and also the array of Data
//this only reads the form data sent from the browser not the params(for deleting a task)
app.use(express.urlencoded({extended:false}));

var taskList = [
    {
        taskName: "Getting Vegetables",
        taskCategory: "Personal",
        taskDate: new Date('2022-03-03')
    } 
]

//use the routes here and access the routes folder
app.use('/', require('./routes'));

//Setup the view engine (name and value pair)
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running the Express Server : ${err}` );
    }
    console.log(`Express Server is up and running on port: ${port}`);
});



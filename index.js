const express = require('express');
const app = express();
const port = 8000;
//import the express-ejs-layouts lib
const expressLayouts = require('express-ejs-layouts');

//link the static files folder called assets
app.use(express.static('./assets'));

//need to use ejs layouts lib before routes  is required
app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

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
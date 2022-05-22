const express = require('express');
const app = express();
const port = 8000;

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
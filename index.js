const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running the Express Server : ${err}` );
    }
    console.log(`Express Server is up and running on port: ${port}`);
});
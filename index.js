const express = require('express');
const app = express();
const port = 8000;

app.get("/", function(req, res){
    res.send(`Runing test: get request sucessful on the server running on the port: ${port}`)
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log(`Sucessfully running server on port: ${port}`);
})
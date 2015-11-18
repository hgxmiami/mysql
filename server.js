var mysql = require('mysql'); //has to be installed with npm

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'fundraising_app'
});

var port= 5235;
var express= require('express');
var app= express();

app.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        next();
});

connection.connect();
app.get('/transactions', function(req, res){
    console.log("Received request to /transactions route");
    connection.query('SELECT * FROM transactions', function(err, rows){
        if(!err){
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(rows));
            console.log('The solution is: ', rows);
        }
        else{
            console.log('Error while performing query')
        }
    });
});

app.listen(port);
console.log("Server listening on port "+port);

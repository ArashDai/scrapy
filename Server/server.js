var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var path = require('path');
var compress = require('compression');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var url =  require ('../url');

app.use(compress()); 
app.use(express.static('client'));
app.use(bodyParser.json());


app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
});


app.get('/scrape',function(req,res){
    request(url, function(error,response,html){
        if(!error){
            //use cherio here to find dom nodes with correct hours and location
            //if correct hour use phantom to trigger dom event?
        }
        console.log(response);
    });
});



var PORT = process.env.PORT || 3000;

app.listen(PORT);

module.exports = app;
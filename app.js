var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.sendfile(__dirname + "/index.html");
});

app.listen(3018,function(){
    console.log('Server Started!');
    console.log('Enter the following URL in your browser www.localhost:3018/');
});
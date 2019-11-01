
1//- Ref --> MongoDB Module

let mongodb=require('mongodb');
let express = require('express');
let bodyParser = require('body-parser');

//2- get client from the Ref

let MongoClient = mongodb.MongoClient;

let app = express();

app.use(bodyParser.urlencoded({extended:false}));

//3- get access to db from the client

let url ="mongodb://localhost:27017/";
let viewsPath = __dirname+"/views/";
let db = null; 
let col = null;

MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},function(err,client){
     
    db = client.db('week5lec');
    col = db.collection('customers');
    //col.insertOne({name:'Tim',address:"Mel"});
});


app.get('/',function(req,res){
    //col.insertOne({name:'John',address:'Mel'});
    res.sendFile(viewsPath+"index.html");
});

app.post('/newCustomer',function(req,res){
    
    db.push(req.body);
    col.insertOne(req.body);

    res.sendFile(viewsPath+"index.html");
});



app.get('/getall',function(req,res){
    col.find({}).toArray(function(err,data){

        res.render('f',{user:data});
        
        res.send(data);
    });
});

let query = {};

col.updateMany(query,{$mul:{salary:1.5}},{ upsert: true },function(err,result){

});
app.get('/getallT',function(req,res){
    let query ={fullName:'Tim'};
    col.find(query).toArray(function(err,data){
        res.send(data);
    });
});
app.listen(8080);

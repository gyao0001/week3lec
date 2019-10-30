let express = require('express');

let app = express();

app.get("/",function(req,res){
    res.send("Hello to my first Express App!!!");
});

app.get("/wiki/:keyword/fit2095/:id",function(req,res){
    console.log(req.url);
    console.log(req.params);

    res.send("Hello to my first Express App!!!");
});

app.get("/about",function(req,res){
    res.send("This is the about page!!!")
});
app.get("/report",function(req,res){
    console.log(req.url);
    console.log(req.query);

    console.log("The name is ==="+req.query.name);
    console.log("The name is ==="+req.query.age);
    res.send("This is the report page!!!")
});

app.post("/cal")
app.listen(8080);


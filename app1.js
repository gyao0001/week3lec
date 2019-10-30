let express = require('express');

let app = express();

app.get("/",function(req,res){
    res.send("Hello to my first Express App!!!");
});

app.get("/about",function(req,res){
    res.send("This is the about page!!!")
});

app.post("/cal")
app.listen(8080);


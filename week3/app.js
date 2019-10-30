let http = require('http');
let fs = require('fs');

let urlParse = require('url');


http.createServer(function(request,response){
    let fileName;
    let url = request.url;

    let myRequestQ = urlParse.parse(request.url,true).query;
    console.log(myRequestQ.name);
    console.log(myRequestQ);

    if(url==="/students"){
        fileName = "./students.html";
    }else if(url === "/teachers"){
        fileName = "./teachers.html"
    }else{
        fileName = "./index.html"
    }

    fs.readFile(fileName,function(error,content){
        response.write(content);
        response.end();

    });

    
}).listen(8080);

console.log("I am listeaing at port 8080"); 
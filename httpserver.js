const http= require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>
{
    if(req.url=="/")
    {       
res.end("welcome from home side");
    }
    else if(req.url=="/userapi")
    {
        fs.readFile("./jsonfile.json","utf-8",(err,data)=>
        {
            res.writeHead(200,{ "Content-type": "application/json" });
           res.end(data); //Display all data to the brawser
        //    const obj= JSON.parse(data);
        //    res.end(obj.name);//display object specific property
        })
    }
    else{
        res.writeHead(404,{"Content type":"text/html"});
        res.end("404 Page Not fount Error");
    }
});
  
   server.listen(8000,"127.0.0.1",()=>{
       console.log("Server is Started at 8000 Port")
   });
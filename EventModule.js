const EventEmitter= require("events");
  const event= new EventEmitter();
    event.on("SayMyname",()=>{
        console.log("Your name is Gaurav");
    });
    event.on("SayMyname",()=>{
        console.log("Your name is Sanjay");
    });
    event.on("SayMyname",()=>{
        console.log("Your name is Jadhav");
    });

  event.emit("SayMyname");
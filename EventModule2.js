// const EventEmitter= require("events");
//   const event= new EventEmitter();
//     event.on("SayMyname",(sc,msg)=>{
//         console.log(`Your code ${sc} is ${msg}`);
//     });
//   event.emit("SayMyname",200,"ok");
const Eventer= require("events");
const event= new Eventer();
 event.on("saymyname",()=>{
     console.log("Your name is gaurav");
 })

event.emit("saymyname");
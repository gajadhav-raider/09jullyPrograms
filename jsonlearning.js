const fs= require("fs");
const obj={
    name:"Gaurav",
    Age:54,
    Department:"IT Devlopment"
};
//   const jsonobj= JSON.stringify(obj);//stringify method is makee normal object to json
//   console.log(jsonobj);
const jsonobj= JSON.stringify(obj);
fs.writeFile("jsonfile.json",jsonobj,(err)=>{//json file is Created and normal Object is convert into json format
console.log("File is Created");
});
fs.readFile("jsonfile.json","utf-8",(err,data)=>{
    const originaldata= JSON.parse(data);//JSON parse method convert json format to normal object
    console.log(originaldata);
    console.log(originaldata.Department);
});

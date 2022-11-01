
let express=require('express');
let app=express();
let fs = require('fs');
let photos = require('./photos.json');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

 app.set("view engine" , "ejs");

let users=[];

app.get('/iso',(req,res)=>{
  res.json(users);
})

app.use("/home",require('./routes/home'));
app.use("/",require('./routes/slash'));
app.use("/iso",require('./routes/iso'));

app.post("/testforme",(req,res)=>{
  let isValidP=false;
  let isValidN=false;
  if(req.body.sifra.length>=8) isValidP=true; else err='password must be at least 8 characters';
  if(!users.some(x => x.firstName== req.body.ime)) isValidN=true; else err='username taken';

  console.log(Array.prototype.includes.call(users,{firstName: "adinaf"}))
  if(isValidP*isValidN) {
    
    users.push({firstName: req.body.ime});
    res.redirect("/iso");
    return;
  }
  
  res.render("index",{
    error: err,
    username: req.body.ime,
    password: req.body.sifra
  });
  //TODO app with account creating in runtime, when register return json from all users
})

app.listen(8080,()=>console.log("srvr started at "+8080));
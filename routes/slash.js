var express = require('express');
var path = require('path');
var router = express.Router();
let photosJson = require('../photos.json');

router.get('/favicon.ico',(req,res)=>{
  res.sendFile(path.join(__dirname, '../sa.png'));

})

router.get('/a',(req,res)=>{
  res.render('lab05-test02.ejs');
})

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  for(let i=0;i<3;i++){
    if(photosJson[i].id==id){
      res.json(photosJson[i]);
      return;
    }
  }
  //todo , param function, next wait in ms, crud api with ram
  res.json({error : "404"});

});

router.param("id",(req,res,next,id)=>{
  console.log(id);
 next();
  
})

console.log(path.join(__dirname, '../sa.png'))
module.exports = router;

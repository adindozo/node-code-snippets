var express = require('express');
var router = express.Router();
let photosJson = require('../photos.json');

router.get('/:iso', function(req, res, next) {
  let iso = req.params.iso.toUpperCase();
  let result=[];
  for(let i=0;i<3;i++){
    if(photosJson[i].location.iso==iso){
        result.push(photosJson[i]);
    }
  }
  res.json(result);

});

module.exports = router;

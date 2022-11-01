let express = require('express');
let router = express();
let photosJson = require('../photos.json');
router.set("view engine" , "ejs");
//Kreirati rutu /sifra/:k/:len koja vraća k lozinki dužine len, te ih prikazuje u tabeli.
let generatePassword = require('password-generator')
router.get('/:k/:len', function(req, res) {
    let pswrds=[];
    for(let i=0;i<req.params.k;i++){
        pswrds.push(generatePassword(req.params.len));
    }
 res.render("lab05-test02",{passwords: pswrds});

});

// app.get('/:k/:len', function(req, res) {
//     let pswrds=[];
//     for(let i=0;i<req.params.k;i++){
//         pswrds.push(generatePassword(req.params.len));
//     }
//   res.render("lab05-test02",{passwords: pswrds});
  
//   });

module.exports = router;

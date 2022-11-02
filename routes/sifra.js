let express = require('express');
let router = express();
let photosJson = require('../photos.json');
router.set("view engine" , "ejs");
//Kreirati rutu /sifra/:k/:len koja vraća k lozinki dužine len, te ih prikazuje u tabeli.
let generatePassword = require('password-generator')
let generator = require('generate-password');
router.get('/:k/:len', function(req, res) {
    let pswrds=[];
    for(let i=0;i<req.params.k;i++){
        pswrds.push(generatePassword(req.params.len));
    }
 res.render("lab05-test02",{passwords: pswrds});

});

router.post('/',(req,res)=>{
    console.log(req.body)
    if(!req.body.uppercase && !req.body.lowercase && !req.body.numbers)res.redirect('/sifra/'+req.body.k+"/"+req.body.n); else{
        let passwords=generator.generateMultiple(req.body.k, {
            length: req.body.n,
            uppercase: req.body.uppercase=='on',
            lowercase: req.body.lowercase=='on',
            numbers: req.body.numbers=='on'
        })
        res.render("lab05-test02",  {passwords: passwords})
    }
})


generator.generateMultiple(3, {
	length: 10,
	uppercase: false
});


// app.get('/:k/:len', function(req, res) {
//     let pswrds=[];
//     for(let i=0;i<req.params.k;i++){
//         pswrds.push(generatePassword(req.params.len));
//     }
//   res.render("lab05-test02",{passwords: pswrds});
  
//   });

module.exports = router;

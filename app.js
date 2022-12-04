
let express = require('express');
let app = express();
let Pool = require('pg').Pool;
let pool = new Pool({
  user: "vxxymtgx",
  password: "QtZGvk8TQTLcn4RJ8qztbIZjAfRieaQ3",
  host: "lucky.db.elephantsql.com",
  port: 5432,
  database: "vxxymtgx",
})
var path = require('path');
let fs = require('fs');
let photos = require('./photos.json');
let generatePassword = require('password-generator')
app.use((req, res, next) => {
  console.log(req.url);
  next();
})
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})
//Kreirati rutu /sifra/:k/:len koja vraća k lozinki dužine len, te ih prikazuje u tabeli.
// Na naslovnoj stranici, kreirati formu koja traži unos dva broja (k i n), te kreira i prikazuje k lozinki dužine n.
app.get('/gallery.js', (req, res) => {
  res.sendFile(__dirname + '/gallery.js');
})



app.get('/insertstring/:s', (req, res) => {
  pool.connect((err, client, done) => {
    if (err) return res.send(err);
    client.query(`insert into t1 (string) values ('${req.params.s}')`, [], (err, result) => {
      done();

      if (err) return res.send(err);
      res.send(200);
      console.log(result)
    })
  });

})

app.get('/showstrings', (req, res) => {
 // return res.render('db',data: 2);
  pool.connect((err,client,done) => {
    console.log(err);
    if(err) return res.render('db',err);
    client.query('select * from t1',[],(err,result) => {
      done();
      if(err) return res.render('db',err);
      let data = result.rows;
      res.render('db',{data});
      console.log(data)
      console.log(err);
    });
  })
})

app.get('/project2', (req, res) => {
  res.sendFile(__dirname + '/public/project2/ch10-proj02.html')
})


// Na naslovnoj stranici, kreirati formu koja uz ranije pretpostavke ima i checkbox elemente za dodatni opis lozinke
//  (sadrži velika slova, mala slova, brojeve i slično), te na osnovu označenog, kreira k lozinki dužine n sa naznačenim osobinama.
app.get('/', (req, res) => {
  res.render("lab05-test02")
})

app.get('/lab2', (req, res) => {
  res.render("lab-test02")
})

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


let users = [];


app.use("/sifra", require('./routes/sifra'));
app.use("/", require('./routes/slash'));
app.use("/iso", require('./routes/iso'));

app.post("/testforme", (req, res) => {
  let isValidP = false;
  let isValidN = false;
  if (req.body.sifra.length >= 8) isValidP = true; else err = 'password must be at least 8 characters';
  if (!users.some(x => x.firstName == req.body.ime)) isValidN = true; else err = 'username taken';

  console.log(Array.prototype.includes.call(users, { firstName: "adinaf" }))
  if (isValidP * isValidN) {

    users.push({ firstName: req.body.ime });
    res.redirect("/iso");
    return;
  }

  res.render("index", {
    error: err,
    username: req.body.ime,
    password: req.body.sifra
  });
  //TODO app with account creating in runtime, when register return json from all users
})

app.listen(8080, () => console.log("srvr started at " + 8080));
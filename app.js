
let express = require('express');
let app = express();
let pg = require('pg');
pg.defaults.max = 3;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());       // to support JSON-encoded bodies
 // to support URL-encoded bodies
let pool = new pg.Pool({
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

    next();
})
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
})
// Napraviti tabelu muzika u bazi podataka. Tabela sadrži podatke: id, pjesma, izvođač, godina.✔️

// Napraviti Node aplikaciju sa rutom /muzika koja ispisuje tabelu svih pjesama u bazi. Napraviti dugmić uz svaki red u tabeli. Klikom na dugmić, pjesma se briše.✔️

app.get('/muzika', async (req, res) => {
    try {

        let songList = await pool.query('select * from muzika')
        res.render('svepjesme', { songList: songList.rows })

    } catch (err) {
        res.render('svepjesme', { err })
    }

})

// Napraviti rutu /briši/:id, koja će za proslijeđeni ID brisati pjesmu iz baze.✔️
app.delete('/brisi/:id', async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        console.log(!isNaN(id))
        if (isNaN(id)) throw 'error';

        let songList = await pool.query('delete from muzika where id=$1', [req.params.id]);
        res.sendStatus(200);

    } catch (err) {
        res.sendStatus(500);
    }
})
// Napraviti rutu /dodaj, koja će za proslijeđene podatke dodati pjesmu u bazu.✔️
app.post('/dodaj', async function (req, res) {
    try {
        
        await pool.query('insert into muzika(pjesma,izvodjac,godina) values ($1,$2,$3)',[req.body.pjesma,req.body.izvodjac,req.body.godina]);
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})
//TODO auth and websockets before project
// Kreirati formu za dodavanje pjesme. Forma se nalazi ispod tabele. Klikom na submit, stranica se ne reloada, ali se podatak dodaje u tabelu u slučaju inserta.
app.get('/gallery.js', (req, res) => {
    res.sendFile(__dirname + '/gallery.js');
})

app.get('/multiqrs', (req, res) => {
    pool.connect((err, client, done) => {

        if (err) return res.render('db', err);
        client.query('select * from categories;', [], (err, result) => {


            if (err) return res.render('db', err);
            res.data1 = result.rows;


        });
        client.query('select * from t1', [], (err, result) => {
            done();
            if (err) return res.render('db', err);
            res.data2 = result.rows;
            //res.render('db',{data1: res.data1,data2: res.data2});

        });
    })
    pool.connect((err, client, done) => {

        if (err) return res.render('db', err);
        client.query('select * from categories;', [], (err, result) => {


            if (err) return res.render('db', err);
            res.data1 = result.rows;


        });
        client.query('select * from t1', [], (err, result) => {
            done();
            if (err) return res.render('db', err);
            res.data2 = result.rows;
            //res.render('db',{data1: res.data1,data2: res.data2});

        });
    })
    pool.connect((err, client, done) => {

        if (err) return res.render('db', err);
        client.query('select * from categories;', [], (err, result) => {


            if (err) return res.render('db', err);
            res.data1 = result.rows;


        });
        client.query('select * from t1', [], (err, result) => {
            done();
            if (err) return res.render('db', err);
            res.data2 = result.rows;
            //res.render('db',{data1: res.data1,data2: res.data2});

        });
    })
    pool.connect((err, client, done) => {

        if (err) return res.render('db', err);
        client.query('select * from categories;', [], (err, result) => {


            if (err) return res.render('db', err);
            res.data1 = result.rows;


        });
        client.query('select * from t1', [], (err, result) => {
            done();
            if (err) return res.render('db', err);
            res.data2 = result.rows;
            //res.render('db',{data1: res.data1,data2: res.data2});

        });
    })
    pool.connect((err, client, done) => {

        if (err) return res.render('db', err);
        client.query('select * from categories;', [], (err, result) => {


            if (err) return res.render('db', err);
            res.data1 = result.rows;


        });
        client.query('select * from t1', [], (err, result) => {
            done();
            if (err) return res.render('db', err);
            res.data2 = result.rows;
            //res.render('db',{data1: res.data1,data2: res.data2});

        });
    })
    pool.connect((err, client, done) => {

        if (err) return res.render('db', err);
        client.query('select * from categories;', [], (err, result) => {


            if (err) return res.render('db', err);
            res.data1 = result.rows;


        });
        client.query('select * from t1', [], (err, result) => {
            done();
            if (err) return res.render('db', err);
            res.data2 = result.rows;
            res.render('db', { data1: res.data1, data2: res.data2 });

        });
    })



})

app.get('/insertstring/:s', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) return res.send(err);
        client.query(`insert into t1 (string) values ('${req.params.s}')`, [], (err, result) => {
            done();

            if (err) return res.send(err);
            res.send(200);

        })
    });

})

app.get('/showstrings', (req, res) => {
    // return res.render('db',data: 2);
    pool.connect((err, client, done) => {
        console.log(err)
        if (err) return res.render('db', err);
        client.query('select * from t1', [], (err, result) => {
            console.log(err)

            if (err) return res.render('db', err);
            let data = result.rows;
            res.render('db', { data1: data });


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
const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");
require("./hbs/helpers");

app.use(express.static(__dirname + '/public'))

//EXPRES HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    res.render("home", {
        nombre: "mARTin",
    });
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el pueto ${port}`);
})
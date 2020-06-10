const   express     = require('express'), // Import express
        cors        = require('cors'),
        bodyParser  = require('body-parser'),
        passport    = require('passport'),
        env         = require('./environnement'),
        app         = express() //instance express



app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

//Root Route
app.get('/', (req, res) => {
    res.send("Hello World");
  });





//App Routes * MiddelWare
app.use('/user', require('./routes/user'))
app.use('/token', require('./routes/tokens'))




app.listen(env.port, function() {
    console.log("Run serve")
})
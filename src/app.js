const express = require('express'), // Import express
    app = express(), //instance express
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    env = require('./environnement'),
    bd = require('./database/mysql')


mongoose.connect(env.bdd.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(bodyParser.urlencoded({
    extended: false
}))

//Root Route
app.get('/', (req, res) => {
    res.send("Hello World");
  });





//App Routes * MiddelWare
app.use('/user', require('./routes/user'))




app.listen(env.port, function() {
    console.log("Run serve")
})
const   express     = require('express'), // Import express
        cors        = require('cors'),
        bodyParser  = require('body-parser'),
        passport    = require('passport'),
        env         = require('./environnement'),
        app         = express() //instance express

/**
 * Ajout des lignes pour firebase
 */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const dbConfig = require('./config/mongo');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    // ...
    apiKey: "AIzaSyA4LLLTEeRtEmpO_C_Q5x9PjGRmhxWQK_o",
    authDomain: "familyhome-287021.firebaseapp.com",
    databaseURL: "https://familyhome-287021.firebaseio.com",
    projectId: "familyhome-287021",
    storageBucket: "familyhome-287021.appspot.com",
    messagingSenderId: "320323557266",
    appId: "1:320323557266:web:1554050277b93e9f52934b",
    measurementId: "G-DHY1HNJ3CM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



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
app.use('/notes', require('./routes/notes'))


const port = process.env.PORT || env.port;

app.listen(port, function() {
    console.log("The server is running on port", port)
})
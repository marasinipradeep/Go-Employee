const express = require("express");
const socketio =require('socket.io');
const http = require('http')
const session = require("express-session");
const path = require("path");
var mongoose = require("mongoose")
const passport = require("./config/passport")
require("dotenv").config();
const cors =require("cors")



//const {addUser, removeUser, getUser, getUserInRoom} = require('./controllers/users')

global.__basedir = __dirname;

//Setting up the PORT and requiring models for syncing
const PORT = process.env.PORT || 8080;



//creating admin model
var connStr = "mongodb://localhost:27017/employeeConnectingSystem";
mongoose.connect(process.env.MONGODB_CONNECION_STRING||connStr,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}, function(err) {
    if (err) throw err;
    console.log("Successfully connected to MongoDB");
});


//Creating express app and configuring middleware needed for authentication
const app = express();
//Parse application body as JSON
app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "./public")));
app.use(cors());
//We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard admin", resave: true, saveUninitialized: true })
);

//Check Employee Passport
app.use(passport.initialize());
app.use(passport.session());

//chat dependencies
const server = http.createServer(app);
const io = socketio(server);
io.origins('*:*') 


//chat dependencies

io.on('connection', (socket) => {
  console.log('a user connected');
});

//import routes and give the server access to them
require("./routes/employee-register-api")(app);
require("./routes/router")(app)


  app.listen(PORT, () => {
    console.log("App is listening to PORT : " + PORT);
  });

const express = require('express');
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
var mongoose = require("mongoose")
const passport = require("./config/passport")
require("dotenv").config();

global.__basedir = __dirname;

const { addUser, removeUser, getUser, getUserInRoom } = require('./controllers/users')


const PORT = process.env.PORT || 8080

const router = require('./routes/chatBox');
//const users = require('./users');

//Set up socket.io (Refer https://socekt.io/docs/#Using-with-Node-http-server)
//Socket used for real time application because http are slow and used to serve websites
const app = express();

const server = http.createServer(app);
const io = socketio(server);

//Check Employee Passport
app.use(passport.initialize());
app.use(passport.session());

io.on('connection', (socket) => {
  //first string should be same exact as front end 'join' then call back function.Something that happens with join

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
console.log("inside connection")
console.log(user)
     //Join joins user in room
     socket.join(user.room);

    //Focusing on system generated messages
    socket.emit('message', { user: 'admin', text: `Hello ${user.name},good luck for new connection` })

    //Broadcast Sends message to everyone besides that user
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name},has joined! ` })

    //
    io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })

    callback();
  });

  //Events for user generated messages 
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message })

    //When the user leaves we can send the new messge
    //io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })

    //Call callback right here so that they can do somethig after the message is send on the front end
    callback();
  })

  socket.on('disconnect', () => {
    console.log("user has left");
    const user =removeUser(socket.id)
    if(user){
      io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left`})
      io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })
    }
  });
})

app.use(router);
app.use(cors());



//creating admin model
var connStr = "mongodb://localhost:27017/employeeConnectingSystem";
mongoose.connect(process.env.MONGODB_CONNECION_STRING || connStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, function (err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

//Parse application body as JSON
app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());
//We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard admin", resave: true, saveUninitialized: true })
);

//Add static to server images
app.use(express.static('uploads'));

//import routes and give the server access to them
require("./routes/employee-register-api")(app);

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})



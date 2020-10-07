const express = require("express");
const session = require("express-session");
const path = require("path");
var mongoose = require("mongoose")
const passport = require("./config/passport")
require("dotenv").config();
const cors =require("cors")

//chat dependencies
const socketio = require("socket.io");
const http = require("http");
// end chat dependencies

const {addUser, removeUser, getUser, getUserInRoom} = require('./controllers/users')

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

//We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard admin", resave: true, saveUninitialized: true })
);

//Check Employee Passport
app.use(passport.initialize());
app.use(passport.session());

//chat dependencies
const server =http.createServer(app);
const io=socketio(server);

io.on('connection',(socket)=>{
  //first string should be same exact as front end 'join' then call back function.Something that happens with join
  socket.on('join',({name,room},callback)=>{
    const {error, user} =addUser({id:socket.id,name,room});
    if(error) return callback(error);

    //Focusing on system generated messages
    socket.emit('message', {user:'admin',text:`${user.name}, welcome to the room ${user.room}`})

    //Broadcast Sends message to everyone besides that user
    socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name},has joined! `})


    //Join joins user in room
    socket.join(user.room);

    //
    io.to(user.room).emit('roomData',{room:user.room,users:getUserInRoom(user.room)})

    callback();
  });

  //Events for user generated messages 
  socket.on('sendMessage', (message,callback)=>{

      const user =getUser(socket.id);

    
      io.to(user.room).emit('message',{user:user.name,text:message})

       //When the user leaves we can send the new messge
       io.to(user.room).emit('roomData',{roomm:user.room,users:getUserInRoom(user.room)})

      //Call callback right here so that they can do somethig after the message is send on the front end
      callback();
  })

  socket.on('disconnect',()=>{
      console.log("user has left");
  });
})

//End of chat dependencies

//import routes and give the server access to them
require("./routes/employee-register-api")(app);
app.use(cors());



  app.listen(PORT, () => {
    console.log("App is listening to PORT : " + PORT);
  });

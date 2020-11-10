const e = require("express");

const users = [];

const addUser = ({ id, name, room }) => {
    //Change room name.Eg pradeep room =pradeeproom
   
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

   if(name===null || room ===null){
       return {error:"Name and room must specify"}
   }

    const existingUser = users.find((user) => user.room === room && user.name === name);
   
    if (existingUser) {
       
        return { error: 'Employee is busy with someone.Refresh page in a minute or Try finding another employee ' };
    }
    const user = {id, name, room};
    users.push(user);
    return {user};
}

const removeUser = (id) => {
    const index =users.findIndex((user)=>user.id===id);
    if(index !== -1){
        return users.splice(index,1)[0];
    }
}

const getUser = (id) =>users.find((user)=>user.id ===id);


const getUserInRoom = (room) => users.filter((user)=>user.room===room); 

module.exports ={addUser, removeUser, getUser, getUserInRoom};
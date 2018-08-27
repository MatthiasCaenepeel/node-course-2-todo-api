const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const{User} = require("./../server/models/user");

var id = "5b76daa2724fcf34088aa0ef";

/*User.findOne({
    _id: id
}).then((User) => {
    console.log("E-mail is", User.email);
});

/*
var id = "5b7e5bd05fd10e2ddcc1fdfe";

if(!ObjectID.isValid(id)) {
    console.log("ID not valid");
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos", todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log("Todo", todo);
});
*/

User.findById(id).then((user) => {
 if(!user){
    return  console.log("Unable to find user.");
 }

 console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);  
})


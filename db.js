const mongoose  = require("mongoose");

var mongoURL = 'mongodb+srv://dulara:dulara2001@cluster0.kasd6g3.mongodb.net/kcs-rooms'


mongoose.connect(mongoURL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


var connection = mongoose.connection

connection.on('error', ()=> {
    console.log("MongoDB Connection Failed")
})

connection.on('connected', ()=> {
    console.log("MongoDB Connection Successful")
})

module.exports = mongoose
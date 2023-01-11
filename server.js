const express = require("express");
const app = express();

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')


app.use('/api/rooms', roomsRoute)
app.use(express.json())


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
  })
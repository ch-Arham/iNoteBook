const connectToMongo = require('./db');
const express = require('express');
const app = express();
const notes = require('./routes/notes');
const auth = require('./routes/auth');
const cors = require('cors')

connectToMongo();
//parse json to body
app.use(express.json());
 
app.use(cors())

//Available Routes
app.use('/api/auth', auth);
app.use('/api/notes', notes);

app.listen(5000,()=>{
    console.log("Listening to port:5000....");
})
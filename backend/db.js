//1to connect with database --> mongodb
const mongoose = require('mongoose');
//2toggle word wrap alt+z
const mongoURI = 'mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
//3 npm install -D nodemon -->installing it as a devDependency
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log("Connected to MongoDB..."))
    .catch(()=>console.log("Connection Failed..."));
}

module.exports = connectToMongo;

// method-1 
//  mongoose
//  .connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
//  })
//  .catch(error => winston.error(error))

//method 2
// mongoose.connect(mongoUri, {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }, function(err, res) {
  
//     if (err) {
//       return console.error('Error connecting to "%s":', mongoUri, err);
//     }
//     console.log('Connected successfully to "%s"', mongoUri);
//   });

//method 3
// mongoose.connect(uri, {
//     useMongoClient: true
//    })
//    .then(() => {
//     console.log('Connection to database!')
//    })
//    .catch(() => {
//     console.log('Connection to database failed!')
//    })
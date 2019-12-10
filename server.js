const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 8080;

const properties = require('./routes/API');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://daniel:pointers6191502@hometeam-ouidt.mongodb.net/admin?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true, dbName: "HomeTeamDB" }).then(() => console.log('connection successfull')).catch((err) => console.log(err));

app.use('/api', properties);

// app.use((req,res,next) => {
//   const error = new Error('Not Found');
//   error.status(404);
//   next(error);
// })

// app.use((error,req,res,next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message
//     }
//   })
// })


app.listen(PORT, () => {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
})
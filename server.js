const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 8080;

const properties = require('./routes/API');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:Pointers619!@cluster0-ouidt.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, dbName: "HomeTeamDB" }).then(() => console.log('connection successfull')).catch((err) => console.log(err));

app.use('/api', properties);


app.listen(PORT, () => {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
})
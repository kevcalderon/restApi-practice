
const express = require('express');
const bodyParser = require('body-parser');
const morgan =  require('morgan');
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/users'); 

//settings
app.set('port', process.env.PORT || 3000);

//db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbapi')
.then(db=>{
    console.log('db is connected.');
}).catch(err => console.log(err));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//start the server.
app.listen(app.get('port'),() =>{
    console.log('server on port', app.get('port'));
});

//routes
app.use('/users', userRouter);
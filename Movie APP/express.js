const express=require('express');
const app=new express();   //new instance object of express class

const morgan=require('morgan');
app.use(morgan('dev'));

const MovieRoutes=require('./routes/movieroutes');
app.use('/movies',MovieRoutes);

// Requiring dotenv nodemodule file
require('dotenv').config();

// Requiring database in db -> connection.js
require('./db/connection');


// The below code is used to access the port number from the env file and this should be declared below
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`The Server is listening at port : ${port}`)
})

// npm i init
// npm i express
// npm i morgan
// npm i dotenv
// npm i mongoose
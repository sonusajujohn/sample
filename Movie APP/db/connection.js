// requiring mongodb database using npm i mongoose
const mongoose=require('mongoose');

// requiring env file inorder to give connection to the database created in the mogodb Compass
require('dotenv').config();
const connection=process.env.mongoDB_URL;

// Creation of Connection

mongoose.connect(connection).then(()=>{               //.then-catch is a promise asynchronous function then-supports +ve statement & .catch supports -ve statement
    console.log('Connection Established Successfully');
}).catch(()=>{
    console.log('Failure - Error In Connection');
})

// if we donot take the value given in the env file we can establish the connection by mongoose.connect('mongodb://localhost:27017/MovieAPP').then(()=> {console.log('sucess)}).catch(()=>{console.log('failure)});
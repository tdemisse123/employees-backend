const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const employeeRoute = require('./routes/employee')
const cors = require("cors");


const app = express();

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("database connection is sucessful")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api/employees", employeeRoute)



app.listen(5000, () => {
    console.log("our server is up and running port 5000");
})
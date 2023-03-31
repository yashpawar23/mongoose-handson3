const express = require('express');
const bodyParser = require("body-parser");
const studentRouter = require("./routes/student");
const cors = require("cors")
const dotEnv=require("dotenv")
dotEnv.config()
const connect = require('./database/mongoose');


const app = express();

app.use(bodyParser.json());
app.use(studentRouter);


app.listen(process.env.PORT, async ()=>{
    console.log(`server is running on ${process.env.PORT}`)
    await connect()
})
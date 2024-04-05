const express = require('express');
const {connectToMongoDB}=require('./db');
require('dotenv').config();





const PORT=process.env.PORT
const app = express();

app.use(express.json());

//connecting to mongodb
connectToMongoDB()

app.get("/", (req, res) =>{
    res.send("Welcome to the World of codings")
})


app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
})

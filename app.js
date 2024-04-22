const express = require('express');
const {connectToMongoDB}=require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 8000


const start = async () => {
    const app = express();

    app.use(express.json());
    try {
         //connecting to mongodb
    await connectToMongoDB()
    
   
    } catch (error) {
        console.log(`Error: ${error}`)
    }

    app.get("/", (req, res) =>{
        res.send("KMoral welcomes you all the world of programming and Tumininu is here to help")
    })
    
    
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: http://localhost:${PORT}`)
    }) 
  
}

start()



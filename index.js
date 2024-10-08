require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./db/connect');

const express = require('express')


const app = express()

const mainRouter = require('./routes/student')
app.use(express.json())

app.use('/api/v1', mainRouter)


const port = process.env.PORT || 3000

const start = async () => {
   try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
   } catch (error) {
    console.log('something is wrong');
    
    
   }
}
start()

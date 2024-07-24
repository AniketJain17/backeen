const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.status(200).send({ status: "success", msg: "API is working well." })
})

const port = process.env.PORT || 1000
app.listen(port, () => {
    mongoose.connect(process.env.DB_URL).then(() => console.log('Server is running :)')).catch((error) => console.log(error))
})

const express = require('express')
const app = express()
const port =process.env.PORT|| 5000
const cors= require('cors');
require("dotenv").config()
const mongoose=require('mongoose')
const tourRoutes=require('./routes/tourroutes')


//middlewares

app.use(express.json())
app.use(cors())



app.use('/api/v1/tours',tourRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
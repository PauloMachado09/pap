const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({ path: './private/.env' })
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.use('/createsoc', require('./routes/createsocRoute'))
app.use('/getsoc', require('./routes/getsocRoute'))
app.use('/updatesoc', require ('./routes/updatesocRoute'))
app.use('/deletesoc', require ('./routes/deletesocRoute'))

mongoose.connect(process.env.MONGOURI, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to MongoDB"));


app.listen(3000,(error)=>{
    if(error) throw error
    console.log('Api listening on port 3000')
})
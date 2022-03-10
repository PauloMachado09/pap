const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

require('dotenv').config({ path: './public/private/.env' })


app.get('/public', function (req, response) {
  response.sendFile(path.join(dirname, '/public/index.html  '))
})


app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

app.use(express.static('./public'))

app.use('/createsoc', require('./routes/createsocRoute'))
app.use('/getsoc', require('./routes/getsocRoute'))
app.use('/updatesoc', require('./routes/updatesocRoute'))
app.use('/deletesoc', require('./routes/deletesocRoute'))
app.use('/getallsoc', require('./routes/getallsocRoute'))

app.use('/createdes', require('./routes/createdesRoute'))
app.use('/deletedes', require('./routes/deletedesRoute'))
app.use('/updatedes', require('./routes/updatedesRoute'))
app.use('/getdes', require('./routes/getdesRoute'))
app.use('/getalldes', require('./routes/getalldesRoute'))



mongoose.connect(process.env.MONGOURI, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to MongoDB"));

const port = process.env.PORT || 3000


app.listen(port,(error)=>{
    if(error) throw error
    console.log('Api listening on port 3000')
})
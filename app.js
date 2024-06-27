const express = require('express')
const flash = require('connect-flash');
const app = express()
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const session = require("express-session")
const nocache = require('nocache');
const dotenv = require('dotenv').config()
const {PORT} = process.env

app.use(nocache())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}))

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://muhammedshabeeb330:d0F3HaDyPmt54EoL@scouser.icgssjw.mongodb.net/turf')
.then(()=>console.log('MongoDB success'))
.catch(()=>console.Console.log('MongoDB cracked'))


app.use(flash());

app.use('/',adminRoute)
app.use('/',userRoute)

app.listen(PORT, () => console.log('http://localhost:8000/'))
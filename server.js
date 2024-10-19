const express = require('express')
const app = express()
const connectDb = require('./dataBase/db')
connectDb();
const userAuth = require('./routes/userRoute')
const session = require('express-session')



app.use(session(
    {
        secret : 'sectret key',
        resave : false,
        saveUninitialized : true

    }
))


app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set("view engine" , 'ejs')

app.use('/',userAuth)






app.listen(3001,console.log('server is running http://localhost:3001/'))
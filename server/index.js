require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
app.use(express.json())

//controllers
const auth = require('./controllers/authController')


massive(CONNECTION_STRING)
.then(db => {
    app.set('db',db)
    console.log('Working!')
})
.catch(error => {
    console.log('Oopsies, error occurred!')
})

app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 60 * 60 * 24 * 7 * 13
        }
    })
)

app.use(express.json())

//auth
app.post('/auth/register');
app.post('/auth/login');
app.get('/auth/logout');


app.listen(SERVER_PORT, () => console.log(`Hooray! Server is running on ${SERVER_PORT}!`))
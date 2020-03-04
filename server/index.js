require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const session = require('express-session')
app.use(express.static('public'));
console.log(process.env.SESSION_SECRET)


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

//controllers
const authentication = require('./controllers/authController')
const {getSuggestions} = require('./controllers/suggestionsController')


massive(CONNECTION_STRING)
.then(db => {
    app.set('db',db)

})
.catch(error => {
    console.log(err)
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
app.post('/auth/register', authentication.register);
app.post('/auth/login', authentication.login);
app.get('/auth/logout', authentication.logout);

//suggestions
app.get('/api/suggestions', getSuggestions);

//account
// app.delete('/api/account/:id')
// app.put('api/account/:id')





//sendgrid test
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'atennison25@gmail.com',
    from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail
.send(msg)
.then(() => {}, console.error);



app.listen(SERVER_PORT, () => console.log(`Howdy pardner, server is runnin' on ${SERVER_PORT}!`))
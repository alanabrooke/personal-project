require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const session = require('express-session')
app.use(express.static('public'));
// console.log(process.env.SESSION_SECRET)



const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, SENDGRID_API_KEY} = process.env;

//controllers
const authentication = require('./controllers/authController')
const account = require('./controllers/accountController')
const {getSuggestions} = require('./controllers/suggestionsController')
const {getUser, editUser, logout, deleteUser} = require('./controllers/accountController')

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
app.post('/account/logout', account.logout);

// //suggestions
app.get('/api/suggestions', getSuggestions);

// //account
app.get('/account/user', account.getUser )
app.put('/account/edit/${user_id}', account.editUser)
app.delete('/account/delete/${user_id}', account.deleteUser)






//sendgrid test
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send-email',(req,res)=>{
    const { recipient, sender, topic, text } = req.query;
const msg = {
    to: recipient,
    from: sender,
    topic: topic,
    text: "Thanks for signing up for Zodigames! We'll keep you updated with new features."

};
console.log(msg)
    sgMail.send(msg)
    .then(()=>res.send('E-mail has been sent!'))
    .catch(err=>{
        console.log(err, err.response.body.errors);
        res.status(500).send('An error has occurred. Please try again.')
    })
})



app.listen(SERVER_PORT, () => console.log(`Howdy pardner, server is runnin' on ${SERVER_PORT}!`))
const bcrypt = require('bcryptjs');

const register = (req,res) => {
    const db = req.app.get('db')
    const {username, password, zodiac_id} = req.body;
    bcrypt.hash(password, 15)
    .then((hash) => {
        db.auth.registerUser([username, hash, zodiac_id])
    .then(user => {
        res.sendStatus(200)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json('An error has occurred!')
    }) 
    })
}

const login = (req,res) => {
    const db = req.app.get('db')
    const {username, password} = req.body;
        db.auth.getUser(username)
        .then(user => {
            if(user.length === 0) {
                res.status(400).json('User does not exist.')
            } else {
                bcrypt.compare(password,user[0].password).then(areEqual => {
                    if(areEqual) {
                        const {user_id, username, zodiac_id} = user[0]
                        req.session.user = {
                            user_id,
                            username,
                            zodiac_id
                        }
                        console.log(req.session.user)
                        res.status(200).json(username)
                    } else {
                            res.status(403).json('Incorrect username or password.')
                        }
                    })
                }
            }
        )}
    
        const logout = (req,res) => {
            req.session.destroy();
            res.sendStatus(200)

        }

        module.exports = {
            register, 
            login,
            logout
        }
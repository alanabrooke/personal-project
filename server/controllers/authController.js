const bcrypt = require('bcryptjs');


const register = (req, res) => {
    const db = req.app.get('db');
    const {username, password, zodiac_id} = req.body;
    console.log(req.body)
    bcrypt.hash(password, 10).then((hash) => {
            db.registerUser([username, hash, zodiac_id])
            .then(user => {
                req.session.user = {
                    id: user[0].id,
                    username: user[0].username,
                    user_zodiac_id: user[0].zodiac_id
                };
                res.status(200).json(req.session.user)
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json('error')
        })
        .catch(err => {
            console.log(err)
            res.status(500).json('error')
        })
}

const login = (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body;
    db.get_User(username).then(user => {
        if(user.length === 0) {
            res.status(400).json('user does not exist')
        } else {
            bcrypt.compare(password, user[0].password).then(areEqual => {
                if(areEqual) {
                    const {id, username, zodiac_id} = user[0]
                    req.session.user = {
                       user_id: id,
                       user_username: username,
                       user_zodiac_id: zodiac_id
                    }
                    res.status(200).json(req.session.user)
                } else {
                    res.status(403).json('incorrect username or password')
                }
            })
        }
    })
}


const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
}


const get_User = (req,res) => {
    console.log(req.session)
    res.status(200).json(req.session.user)
}


module.exports = {
    register,
    login,
    get_User,
    logout
}
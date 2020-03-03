const bcrypt = require('bcryptjs');

async function register(req, res) {
    const { username, password, zodiac_id } = req.body;
    const db = req.app.get('db');
  
    const result = await db.getUser(username);
    if (result.length !== 0) return res.status(409).json('Username taken');
  
    const hash = await bcrypt.hashSync(password, 12)
    console.log(hash)
    const registeredUser = await db.registerUser([username, hash, zodiac_id]);
    const user = registeredUser[0];
    req.session.user = { user_id: user.user_id, username: user.username, password: user.password }
    return res.status(201).json(req.session.user);
  }

async function login(req, res) {
    const { username, password } = req.body;
    const db = req.app.get('db');

    
    const foundUser = await db.getUser(username);
    if (foundUser.length === 0) return res.status(409).json('User not found. Please register as a new user before logging in.');
    const user = foundUser[0];

    const isAuthenticated = await bcrypt.compareSync(password, user.password);
    if (isAuthenticated === true) {
        req.session.user = { user_id: user.user_id, username: user.username, zodiac_id: user.zodiac_id };
        res.status(200).json(req.session.user);
    }
}
// console.log(isAuthenticated)
// console.log('password: ' + password)
// console.log('typed password: ' + user.password)

const logout = (req, res) => {
    req.session.destroy();
    // console.log(req.session)
    res.sendStatus(200).json(req.session)
}

const getUser = (req,res) => {
    return req.session.user ? res.status(200).json(req.session.user) : res.status(500).json('User does not exist. Please register and try again.');
}


module.exports = {
    register,
    login,
    getUser,
    logout
}

// const register = (req, res) => {
//     const db = req.app.get('db');
//     const {username, password, zodiac_id} = req.body;
//     console.log(req.body)
//     bcrypt.hash(password, 10).then((hash) => {
//             db.registerUser([username, hash, zodiac_id])
//             .then(user => {
//                 req.session.user = {
//                     id: user[0].id,
//                     username: user[0].username,
//                     user_zodiac_id: user[0].zodiac_id
//                 };
//                 res.status(200).json(req.session.user)
//             });
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json('error')
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json('error')
//         })
// }

// const login = (req, res) => {
//     const db = req.app.get('db')
//     const {username, password} = req.body;
//     db.getUser(username).then(user => {
//         if(user.length === 0) {
//             res.status(400).json('user does not exist')
//         } else {
//             bcrypt.compare(password, user[0].password).then(areEqual => {
//                 if(areEqual) {
//                     const {id, username, zodiac_id} = user[0]
//                     req.session.user = {
//                        user_id: id,
//                        user_username: username,
//                        user_zodiac_id: zodiac_id
//                     }
//                     res.status(200).json(req.session.user)
//                 } else {
//                     res.status(403).json('incorrect username or password')
//                 }
//             })
//         }
//     })
// }
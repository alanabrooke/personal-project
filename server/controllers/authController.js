const bcrypt = require('bcryptjs');


async function register(req, res) {
  const { username, password, zodiac_id } = req.body;
  const db = req.app.get('db');


  const result = await db.auth.getUser(username);
  if (result.length !== 0) return res.status(409).json('username taken');

  const hash = bcrypt.hashSync(password, 10);
  const registeredUser = await db.auth.registerUser(username, hash, zodiac_id);
  
  const user = registeredUser[0];
  req.session.user = { id: user.user_id, username: user.username, zodiac_id: zodiac_id}
  return res.status(201).json(req.session.user);
}

// async function login(e) {
//   if (e) e.preventDefault();
//   const {username, password } = this.state;
//   try {
//     const res = await axios.post('/auth/login', { username, password });
//     if (res.data.loggedIn) this.props.history.push('/selection');
//   } catch (e) {
//     alert('Login failed. Please try again.');
//   }
//   if (isMatching) {
//     console.log('matching');
//   } else {
//     console.log('not matching')
//   }
// }

const login = async (req, res) => {
  var { username, password } = req.body;
  var db = req.app.get('db');

  let foundUser = await db.getUser(username);
  if(!foundUser){
      res
      .status(401)
      .send('User not found');
  }else{
      var user = foundUser[0];
      var { username, hash } = user;
      var isAuthenticated = bcrypt.compareSync(password, hash);
      if(!isAuthenticated){
          res
          .status(403)
          .send('Incorrect username or password');
      }else{
          req.session.user = {
              user_id,
              username
          }
          res
          .status(200)
          .send(req.session.user)
      }
  }
}

function logout(req, res) {
  req.session.destroy();
  res.sendStatus(200);
}

module.exports = {
  register,
  login,
  logout
}
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

async function login(req, res) {
  const { username, password } = req.body;
  const db = req.app.get('db');

  const foundUser = await db.get_user(username);
  if (foundUser.length === 0) return res.status(409).json('User not found! Please try again.');
  const user = foundUser[0];
  const isAuthenticated = await bcrypt.compare(password, user.hash);
  if (isAuthenticated === true) {
    req.session.user = { id: user.user_id, username: user.username, zodiac_id: user.zodiac_id };
    return res.status(200).json(req.session.user);
  }
  return res.status(403).json('Incorrect username or password. Please try again.');
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
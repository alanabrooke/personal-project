const getUser = (req,res) => {
  const { username, zodiac_id, email } = req.body;
    const { id } = req.params;
    const db = req.app.get('db');
  
    const userCheck = await db.getUser(username);
    // return req.session.user ? 
    // res.status(200).json(req.session.user) 
    // : res.status(500).json('User does not exist. Please register and try again.');
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200).json(req.session)
}

async function editUser(req, res) {
    const { username, zodiac_id, email } = req.body;
    const { id } = req.params;
    const db = req.app.get('db');
  
    const userCheck = await db.getUser(username);
    if (userCheck.length !== 0 && userCheck[0].username !== req.session.user.username)
    return res.status(409).json('Username taken, please pick a new name and try again.');
  
    await db.editUser(id, username, zodiac_id, email);
    req.session.user = { user: id, username, zodiac_id, email }
    return res.status(200).json(req.session.user);
  }
  
  
async function deleteUser(req, res) {
    const { id } = req.params;
    const db = req.app.get('db');
  
    await db.user.deleteUser(id);
    req.session.destroy();
    res.sendStatus(200);
  }

module.exports = [
    getUser,
    logout,
    editUser,
    deleteUser
]
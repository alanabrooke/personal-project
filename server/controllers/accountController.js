
const getUser = (req,res) => {
    return req.session.user ? res.status(200).json(req.session.user) : res.status(500).json('User does not exist. Please register and try again.');
}


module.exports = [
    logout,
    getUser
]
const getSuggestions = (req, res) => {
    const db = req.app.get('db')
    db.reviews.getSuggestions().then(suggestions => {
        res.status(200).json(suggestions)
    })
}
module.exports = {
    getSuggestions
}